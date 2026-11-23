/* Tools catalogue: what opens when a card in the "Tools catalogue" section is clicked.
   status: "available" = downloadable (needs file + size), "soon" = listed as coming soon.
   To release a tool: put its zip in assets/downloads/, set status "available", add file, size, version, req, includes. */
window.TOOLS = {
  navisworks: {
    title: 'Navisworks plugins',
    intro: 'Add-ins for Autodesk Navisworks Manage (Clash Detective), written in C# with AI-assisted development (Claude).',
    items: [
      {
        name: 'Group Existing Clashes',
        version: '1.1',
        status: 'available',
        desc: 'Parks the clashes that already exist in a model. For every clash test (including tests in folders) it puts the clashes into one group, with the name and status you choose, so after the next run only new clashes need review. It asks before overwriting existing groups, shows a progress window with Cancel, and the whole change is one undo step.',
        req: 'Navisworks Manage, Windows 10 or 11, administrator rights to install. The installer sets it up for every Navisworks Manage version on the PC.',
        includes: 'Installer, uninstaller, README and the full C# source code',
        file: 'assets/downloads/GroupExistingClashes_v1.1.zip',
        size: '11 KB'
      },
      {
        name: 'Clash Report Export',
        status: 'soon',
        desc: 'Exports a viewer-friendly clash report for reviewers and modellers who don\'t use Navisworks: for each clash, what it is, who it is assigned to and which discipline should resolve it.'
      },
      {
        name: 'Clash Data Transfer',
        status: 'soon',
        desc: 'Transfers clash results, comments and approvals between Navisworks versions (e.g. 2025 to 2023) and from NWD to NWF files.'
      }
    ]
  },
  revit: {
    title: 'Revit plugins',
    intro: 'Add-ins for Autodesk Revit, written in C# with AI-assisted development (Claude).',
    items: [
      {
        name: 'One-button Sync & Relinquish',
        status: 'soon',
        desc: 'Syncs with Central and relinquishes worksharing ownership in a single click.'
      }
    ]
  }
};
