// Project pop-up content. Each key matches data-project="..." on a card in index.html.
// images: base names in assets/img (the site loads name-1600.webp, with name-800.webp on small screens).
// Text in [square brackets] is shown as a yellow placeholder.
window.PROJECTS = {
  uqda: {
    title: "Al Uqda Equestrian Complex, Phase 4",
    images: ["uqda-1", "uqda-2", "uqda-3"],
    meta: [
      ["Location", "Al Uqda, Qatar"],
      ["Role", "BIM Lead / Digital Delivery Specialist"],
      ["Company", "Focus Design Partners"],
      ["Client", "Public Works Authority (PWA)"],
      ["Contractor", "Tadmur Trading & Contracting Co."],
      ["Scale", "~978,000 m² site · ~12,220 m² built-up · ~2,400 m racetrack"],
      ["Value", "~QAR 150m+"],
      ["Year", "2025 – present"],
      ["Software", "Revit, Dynamo, Navisworks Manage, BIM 360 / ACC, AutoCAD"]
    ],
    desc: "Phase 4 expands one of Qatar's leading equestrian venues: a new grandstand and spectator precinct, a repurposed existing grandstand, a ~2,400 m racetrack with a new straight, inner warm-up tracks, an underground service tunnel and a full race-day precinct (stables, parade rings, saddling, sampling and broadcast facilities), coordinated through a fully federated BIM model issued in stages through to IFC.",
    bullets: [
      "Own the federation strategy across architecture, structure and MEP through each IFC issue.",
      "Author and maintain the Pre- and Post-Appointment BEP, MIDP and discipline TIDPs.",
      "Run the clash workflow end to end: clash matrix, detection, dashboards and weekly resolution sessions.",
      "Deliver 4D sequencing and 5D quantity workflows.",
      "Built a custom Revit plugin (C#, Revit API) automating Sync-with-Central, in daily use across the practice."
    ]
  },

  ssdl: {
    title: "SSDL & Environmental Laboratories",
    images: ["ssdl-1", "ssdl-2", "ssdl-3", "ssdl-4", "ssdl-5", "ssdl-6", "envlab-1", "envlab-2", "envlab-3", "envlab-4", "envlab-5", "envlab-6"],
    meta: [
      ["Location", "Al-Sailiya & Mesaimeer, Qatar"],
      ["Role", "BIM Architectural Coordinator"],
      ["Company", "Focus Design Partners"],
      ["Client", "Qatar Building Engineering Company for PWA (Ashghal)"],
      ["Scale", "~3,500 m² SSDL (187,000 m² site) + ~1,950 m² laboratory extension"],
      ["Value", "~QAR 90m"],
      ["Year", "2025 – present (project initiated 2024)"],
      ["Software", "Revit, Navisworks Manage, BIM 360 / ACC"]
    ],
    desc: "Qatar's first neutron-calibration facility: the Secondary Standards Dosimetry Laboratories calibrate and verify radiation measurement equipment for healthcare and research, organised around a central atrium with four wings for laboratories, research, administration and support. The scope also includes a major extension to the Environmental Laboratories in Mesaimeer.",
    bullets: [
      "Led clash resolution and cross-discipline coordination across architecture, structure and MEP.",
      "Delivered 4D sequencing and 5D data development to support programme and cost tracking.",
      "Generated and delivered COBie data for facility handover."
    ]
  },

  ose: {
    title: "OSE, Outfield Spectator Experience",
    images: ["ose-1", "ose-2", "ose-3", "ose-4", "ose-5"],
    meta: [
      ["Location", "Qiddiya City, Saudi Arabia"],
      ["Role", "BIM Coordinator"],
      ["Company", "Focus Design Partners"],
      ["Client", "Test & Training Middle East GmbH / Qiddiya Investment Company"],
      ["Scale", "~150,000 m² motorsports spectator belt"],
      ["Year", "2025 – present (project initiated 2024)"],
      ["Software", "Revit, Navisworks Manage, BIM 360 / ACC"]
    ],
    desc: "A scalable spectator environment for Qiddiya City's Motorsports Precinct: a flexible, terraced seating belt that expands for major events (up to ~45,000 spectators) and returns to public parkland between races, integrating 16 buildings, landscape and full site infrastructure.",
    bullets: [
      "Supported model-based quantity analysis and 4D sequencing across the spectator belt and supporting facilities.",
      "Contributed to executive-level BIM reporting to client leadership on coordination and delivery status.",
      "Coordinated BIM deliverables with architecture, landscape and infrastructure disciplines."
    ]
  },

  ghaf: {
    title: "MAF Ghaf Woods, Residential Complex",
    images: ["ghaf-1", "ghaf-2"],
    meta: [
      ["Location", "Dubai, UAE"],
      ["Role", "Architect / BIM Coordinator"],
      ["Company", "Studio I, Sarajevo"],
      ["Client", "Majid Al Futtaim"],
      ["Value", "~AED 18.7m"],
      ["Year", "2024"],
      ["Software", "Revit, Dynamo, Navisworks, BIM 360, AutoCAD"]
    ],
    desc: "A nature-integrated residential community in Dubai with mid-rise buildings, landscaped public spaces and high-end amenities, blending urban comfort with its natural setting.",
    bullets: [
      "Led architecture discipline BIM coordination with structure and MEP in Revit and Navisworks.",
      "Developed and maintained Revit templates, view standards and project parameters.",
      "Produced detailed design and IFC documentation from design development to tender.",
      "Issued 2 IFC packages through to contractor handover."
    ]
  },

  pja: {
    title: "Palm Jebel Ali, Fronds A–F",
    images: ["pja-1", "pja-2", "pja-3"],
    meta: [
      ["Location", "Dubai, UAE"],
      ["Role", "BIM Modeler / BIM Coordinator"],
      ["Company", "Studio I, Sarajevo"],
      ["Value", "~AED 3.5bn+ (Fronds A–F)"],
      ["Year", "2023"],
      ["Software", "Revit, Navisworks, BIM 360, AutoCAD"]
    ],
    desc: "One of Dubai's landmark island projects within the Palm masterplan: high-end villas, beachfront residences and community infrastructure requiring precise coordination between international design teams.",
    bullets: [
      "Coordinated federated models across architecture, structure and MEP teams.",
      "Created and maintained Revit families, templates and parameters to minimise model errors.",
      "Worked with the Dubai-based consultant team on compliance with local codes.",
      "Supported model federation and BEP documentation across 2 design teams."
    ]
  },

  cpk: {
    title: "CPK Airport (Foster + Partners)",
    images: ["cpk-1"],
    morePlaceholder: "[more CPK images, if you're allowed to share them]",
    meta: [
      ["Location", "Poland"],
      ["Role", "BIM Consultant"],
      ["Company", "Walter AEC, supporting Foster + Partners"],
      ["Value", "~EUR 150m"],
      ["Year", "2025"],
      ["Software", "Revit, Navisworks Manage, Dynamo, AutoCAD"]
    ],
    desc: "A six-month consultancy engagement supporting Foster + Partners on the CPK Airport programme in Poland, focused on facade and roof package coordination and Revit standardisation across the design team.",
    bullets: [
      "Developed a Revit plugin for curtain wall generation with preset mullion profiles and panel types.",
      "Reduced unresolved clashes by ~20% across facade and roof packages with a weekly Navisworks review cycle.",
      "Supported federated model audits and Revit template standardisation.",
      "Trained 5 team members to competent Dynamo users."
    ]
  },

  amaala: {
    title: "Amaala Staff Village",
    images: ["amaala-2", "amaala-1", "amaala-3", "amaala-4", "amaala-5"],
    meta: [
      ["Location", "Red Sea coast, Saudi Arabia"],
      ["Role", "Architect / BIM Coordinator"],
      ["Company", "Studio I, Sarajevo"],
      ["Value", "~SAR 1.7bn (Amaala Village masterplan)"],
      ["Year", "2023"],
      ["Software", "Revit, BIM 360, AutoCAD"]
    ],
    desc: "Part of Saudi Arabia's Vision 2030: a large residential development for the workforce supporting the Amaala luxury destination on the Red Sea coast, with residential units, community facilities and infrastructure built to high standards of sustainability and operational efficiency.",
    bullets: [
      "Member of the building design team for one of the buildings, in client-facing design meetings.",
      "Coordinated federated models across architecture, structure and MEP in Revit and BIM 360.",
      "Delivered 3 documentation packages against an 8-week programme."
    ]
  },

  khalifa: {
    title: "Khalifa City Residential Development",
    images: ["khalifa-1", "khalifa-2", "khalifa-3", "khalifa-4", "khalifa-5", "khalifa-6", "khalifa-7"],
    meta: [
      ["Location", "Abu Dhabi, UAE"],
      ["Role", "Junior Architect, concept design"],
      ["Company", "Studio I, Sarajevo"],
      ["Year", "2023"],
      ["Software", "Revit, SketchUp, AutoCAD, Photoshop"]
    ],
    desc: "A residential development in Abu Dhabi with a mix of mid-rise apartment buildings and community amenities, taken through a complete concept design phase, from massing studies to client-ready presentation.",
    bullets: [
      "Developed building volume, massing and conceptual facade studies in Revit and SketchUp.",
      "Calculated BUA and non-BUA area breakdowns supporting the client's project value estimate.",
      "Produced renderings and presentation material for client design reviews.",
      "Aligned early-stage models with project BIM standards."
    ]
  },

  meryam: {
    title: "Meryam Island, Residential Development",
    images: ["meryam-1", "meryam-2", "meryam-3"],
    meta: [
      ["Location", "Sharjah, UAE"],
      ["Role", "Architect / BIM Modeler"],
      ["Company", "Studio I, Sarajevo"],
      ["Value", "~AED 4.5m"],
      ["Year", "2024"],
      ["Software", "Revit, Dynamo, AutoCAD, BIM 360"]
    ],
    desc: "A mixed-use waterfront development in Sharjah with mid-rise residential buildings, retail and public promenades overlooking the Arabian Gulf, part of a wider urban regeneration effort.",
    bullets: [
      "Created and managed architectural BIM models across multiple building types.",
      "Prepared detailed drawings, schedules and documentation packages for design and tender.",
      "Used Dynamo to streamline repetitive modelling and annotation.",
      "Worked with the design team on layouts, facade elements and material selections."
    ]
  },

  bjelasnica: {
    title: "Bjelašnica Ski-Resort Masterplan Study",
    images: ["bjelasnica-1"],
    morePlaceholder: "[more images or boards]",
    meta: [
      ["Location", "Bjelašnica, Bosnia & Herzegovina"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "A masterplan study for a ski resort on Bjelašnica, part of my concept-to-detail architectural design work at Tekton Studio. [a few lines on the brief, your design approach and your role]",
    bullets: []
  },

  breka: {
    title: "Residential Building [project name]",
    images: ["breka-1"],
    morePlaceholder: "[more images or boards]",
    meta: [
      ["Location", "Sarajevo, Bosnia & Herzegovina [confirm]"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "Concept-to-detail design of a residential building: plans, sections and elevations. [a few lines on the brief, your design approach and your role]",
    bullets: []
  },

  vrace: {
    title: "Residential Villa [project name]",
    images: ["vrace-1"],
    morePlaceholder: "[more images or boards]",
    meta: [
      ["Location", "Sarajevo, Bosnia & Herzegovina [confirm]"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "Residential villa design from concept to detailed drawings. [a few lines on the brief, your design approach and your role]",
    bullets: []
  }
};
