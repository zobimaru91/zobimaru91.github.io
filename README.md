# Faruk Ajanović — portfolio & CV site

Live at **https://zobimaru91.github.io/** (once GitHub Pages is on).
Plain HTML, CSS and a little vanilla JS. No framework, no build step: edit a file, commit, push, and the site updates in about a minute.

## What's where

```
index.html                 the whole site (one long page)
404.html                   "page not found"
.nojekyll                  tells GitHub Pages to serve files as they are
robots.txt, sitemap.xml    for search engines
assets/
  css/style.css            all styling (colours and spacing at the top, in :root)
  js/main.js               mobile menu, scroll animations, active nav link
  img/                     compressed images (.webp, two sizes each: -800 and -1600)
  media/                   put plugin screenshots, GIFs and videos here
  cv/Faruk-Ajanovic-CV.pdf the downloadable CV
```

All paths in `index.html` are relative (`assets/...`), so the site works on GitHub Pages, on a custom domain, and when you open `index.html` straight from your disk. The only absolute URLs are in the `<head>` (canonical link, Open Graph image, JSON-LD) because social previews require them; `404.html` also uses `/` links because it's served from any path.

## Updating the site

1. Edit `index.html` in any text editor (VS Code is easiest).
2. Open `index.html` in your browser to check it.
3. Publish:
   ```powershell
   git add -A
   git commit -m "Update portfolio"
   git push
   ```
   GitHub rebuilds the site in about a minute. Check progress on the repo's **Actions** tab.

### Filling in placeholders

Everything still missing is marked in **yellow with a dashed border** on the page. In the HTML, search for `class="ph"` (text) and `class="media-slot"` (image/video boxes). Current list:

- **Design chapter:** exact years, names and one-line descriptions for the three Tekton Studio projects (Bjelašnica, the residential building, the residential villa); confirm their locations.
- **Design chapter:** M.Arch thesis project (title, one line, image).
- **Coordination chapter:** one screenshot of a federated Navisworks model or clash dashboard. Blur or crop anything client-confidential.
- **Automation chapter:** one screenshot, GIF or short video per tool (6 slots), and measured time saved where you have a real number.
- **Certifications:** add any you earn (ISO 19650, Autodesk).

### Adding an image

1. Add the source to `IMAGES` in `D:\posao\CV\cloud\tools\site_images.py` and run:
   ```powershell
   python D:\posao\CV\cloud\tools\site_images.py D:\posao\CV\cloud\Zobimaru91.github.io
   ```
   It writes `name-800.webp` and `name-1600.webp` into `assets/img/`.
2. Use it in the HTML like the existing cards:
   ```html
   <img src="assets/img/name-800.webp"
        srcset="assets/img/name-800.webp 800w, assets/img/name-1600.webp 1600w"
        sizes="(min-width: 900px) 50vw, 100vw"
        width="800" height="450" loading="lazy" decoding="async" alt="Describe the image">
   ```

### Replacing a media slot with a screenshot, GIF or video

Replace the whole `<div class="media-slot">…</div>` with one of these:

```html
<!-- screenshot -->
<figure class="media"><img src="assets/media/clash-report.webp" width="1600" height="900" loading="lazy" alt="Clash report export"></figure>

<!-- short screen recording: prefer MP4 (H.264) under ~5 MB over a GIF; GIFs are much larger -->
<figure class="media">
  <video src="assets/media/sync-plugin.mp4" autoplay muted loop playsinline preload="none" width="1600" height="900"></video>
</figure>
```

Keep each file under ~5 MB. GitHub's file limit is 100 MB and a Pages site should stay under 1 GB; longer videos are better on YouTube/Vimeo, embedded with an `<iframe>`.

### Updating the CV PDF

The PDF is built from `D:\posao\CV\cloud\tools\content\website_cv.json` with the same scripts as the tailored CVs:

```powershell
python D:\posao\CV\cloud\tools\cvgen.py D:\posao\CV\cloud\tools\content\website_cv.json $env:TEMP\FarukAjanovic_CV.docx
```

```powershell
D:\posao\CV\cloud\tools\topdf.ps1 -Files $env:TEMP\FarukAjanovic_CV.docx
```

```powershell
Copy-Item $env:TEMP\FarukAjanovic_CV.pdf D:\posao\CV\cloud\Zobimaru91.github.io\assets\cv\Faruk-Ajanovic-CV.pdf -Force
```

The contact line (including the phone number) is the `contact` field in the JSON.

## Connecting a custom domain later

1. Buy a domain (e.g. `farukajanovic.com`) from any registrar.
2. In the repo on GitHub: **Settings → Pages → Custom domain**, enter `www.farukajanovic.com`, Save. GitHub creates a `CNAME` file in the repo. Pull it (`git pull`) so your local copy has it too.
3. At your registrar's DNS settings:
   - `CNAME` record: `www` → `zobimaru91.github.io`
   - Four `A` records for the bare domain (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional IPv6 `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
4. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.
5. Recommended: verify the domain in your GitHub account settings (**Settings → Pages → Add a domain**) so nobody else can claim it.
6. In `index.html`, `robots.txt` and `sitemap.xml`, replace `https://zobimaru91.github.io/` with your new address (canonical link, `og:url`, `og:image`, JSON-LD).

Check GitHub's current docs ("Managing a custom domain for your GitHub Pages site") before you set it up, in case the IP addresses change.
