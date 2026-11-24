/* Tools catalogue: what opens when a card in the "Tools catalogue" section is clicked.
   status: "available" = downloadable (needs file + size), "included" = part of an installer listed above it,
   "soon" = listed as coming soon. Optional img / imgAlt = screenshot shown under the description.
   To release a tool: put its zip in assets/downloads/, set status "available", add file, size, version, req, includes. */
window.TOOLS = {
  navisworks: {
    title: 'Navisworks plugins',
    intro: 'Add-ins for Autodesk Navisworks Manage (Clash Detective), written in C# with AI-assisted development (Claude). All three come in one installer, Faruk BIM Tools.',
    items: [
      {
        name: 'Faruk BIM Tools',
        version: '1.0.0',
        status: 'available',
        desc: 'One installer for all three Navisworks tools below. Setup lists the Navisworks versions found on your PC and installs the tools in Autodesk\'s standard plugin folder; they appear in the Tool Add-ins tab. Upgrading means running the newer setup, and it can be removed from Windows Settings > Apps. The tools run only on your PC: no internet connection, nothing is sent anywhere.',
        steps: [
          'Close Navisworks and run FarukBIMTools_Setup_v1.0.0.exe (it asks for administrator rights, as it installs for all users of the PC).',
          'Accept the terms of use and tick the Navisworks versions to install for; the versions found on your PC are ticked for you.',
          'Start Navisworks. The Tool Add-ins tab now has four buttons: Faruk ClashReport 6000inator, Group Existing Clashes, Clash Status Export and Clash Status Import. Hover over a button to see what it does.',
          'To upgrade, run the newer setup over the old one. To remove, use Windows Settings > Apps > Faruk BIM Tools > Uninstall; your reports and models are not touched.'
        ],
        req: 'Navisworks Manage 2023, 2025 or 2026 (64-bit), Windows 10 or 11, administrator rights to install. The setup is not code-signed, so Windows SmartScreen may ask you to confirm (More info > Run anyway).',
        includes: 'Setup (.exe) with its SHA-256 checksum, README, terms of use and third-party notices',
        file: 'assets/downloads/FarukBIMTools_v1.0.0.zip',
        size: '1.6 MB'
      },
      {
        name: 'Faruk ClashReport 6000inator',
        status: 'included',
        desc: 'Exports Clash Detective results as an HTML report with a picture per clash, plus a CSV for Excel, organised by clash test and clash group. Each clash shows its name, status, distance, location, description, assignee, comments, source files and selection-tree paths, and the Revit Element ID of the instance itself (not the nested-family ID of the standard report), so Select by ID in Revit finds it. You choose which tests and statuses to export; very large exports pause safely and continue in the next session. Reads only, never changes the model.',
        steps: [
          'Click Faruk ClashReport 6000inator in the Tool Add-ins tab.',
          'In the window (shown below), tick the clash tests and the statuses to export; the counts update as you choose, and the total shows how many clashes will be exported.',
          'Keep "HTML report with pictures" ticked, or untick it for a CSV only (much faster for thousands of clashes), then choose where to save.',
          'A progress window runs with Cancel. Open the HTML report in any browser, or the CSV in Excel. If it shows "PICTURES PAUSED", save, reopen Navisworks and run it again with the same choices and file name; finished pictures are kept.'
        ],
        img: 'assets/img/clashreport-1.webp',
        imgAlt: 'Faruk ClashReport 6000inator export window with clash test and status choices (test names blurred)'
      },
      {
        name: 'Group Existing Clashes',
        status: 'included',
        desc: 'Parks the clashes that already exist in a model: for every clash test it puts all clashes into one group with the name you type and the status you pick (New, Active, Reviewed, Approved or Resolved), replacing the existing groups. After the next run, only new clashes need review. Changes the file, so save a copy first.',
        steps: [
          'Save a copy of your NWF/NWD, then click Group Existing Clashes in the Tool Add-ins tab.',
          'Type the group name and pick the status for the existing clashes.',
          'Every clash test gets one group with that name and status. Save the file to keep the change.'
        ]
      },
      {
        name: 'Clash Status Export / Import',
        status: 'included',
        desc: 'Carries clash statuses (for example Approved) from one file to another, such as from a client\'s NWD into your new NWF, by matching each clash on its pair of Revit Element IDs. Export writes a .tsv from the source file; Import reads it into your file (same models and tests, tests run) and writes a log next to it.',
        steps: [
          'Open the source file (for example the client\'s NWD) and click Clash Status Export; save the .tsv file.',
          'Open your own file with the same models and the same clash tests, and run the tests.',
          'Click Clash Status Import and pick the .tsv. Matching clashes take the exported status; a log of what was matched is written next to the .tsv. Save the file to keep the change.'
        ]
      }
    ]
  },
  revit: {
    title: 'Revit plugins',
    intro: 'Add-ins for Autodesk Revit, written in C# with AI-assisted development (Claude).',
    items: [
      {
        name: 'Faruk Syncinator 6000',
        version: '1.0.0',
        status: 'available',
        desc: 'One button for Synchronize with Central plus Relinquish All Mine. One click syncs with your current sync settings, then hands back all borrowed elements, worksets and settings, and confirms when both are done. If Revit reports a problem (central not reachable, an element owned by someone else), the error is shown and nothing more is done. Works in workshared project files only.',
        steps: [
          'Close Revit and run FarukSyncinator6000_Setup_v1.0.0.exe (administrator rights), accept the terms and tick your Revit versions. If an older Syncinator is installed, setup offers to remove it first.',
          'Start Revit and choose Always Load if it asks about the unsigned add-in.',
          'Open a workshared project (central or local). On the Faruk Syncinator 6000 ribbon tab, click the button: it syncs with central, relinquishes everything you hold and shows "Sync complete". The button is greyed out in non-workshared files and families.'
        ],
        req: 'Revit 2023, 2024 or 2026 (64-bit), Windows 10 or 11, administrator rights to install. The setup is not code-signed: Windows SmartScreen may ask you to confirm, and Revit asks once about an unsigned add-in (choose Always Load).',
        includes: 'Setup (.exe) with its SHA-256 checksum, README, terms of use and third-party notices',
        file: 'assets/downloads/FarukSyncinator6000_v1.0.0.zip',
        size: '1.6 MB'
      }
    ]
  }
};
