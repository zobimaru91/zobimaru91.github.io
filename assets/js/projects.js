// Project pop-up content. Each key matches data-project="..." on a card in index.html.
// images: base names in assets/img (the site loads name-1600.webp, with name-800.webp on small screens).
//         An empty list shows the pop-up as text only.
// Text in [square brackets] is shown as a yellow placeholder.
window.PROJECTS = {
  uqda: {
    title: "Al Uqda Equestrian Complex, Phase 4",
    images: ["uqda-1", "uqda-2", "uqda-3"],
    meta: [
      ["Location", "Al Uqda, Qatar"],
      ["Role", "BIM Lead, Architecture & Structure"],
      ["Company", "Focus Design Partners"],
      ["Project team", "PWA (client) · Tadmur Contracting (contractor) · CEG International"],
      ["Scale", "~1,000,000 m² site · ~12,000 m² built-up · ~132,000 m² hardscape · ~88,000 m² landscape · 2.4 km racetrack"],
      ["Model", "18 buildings · 106 federated models · LOD 200 → LOD 300"],
      ["Value", "~QAR 150m+"],
      ["Year", "2025 – present"],
      ["Software", "Revit, Dynamo, Navisworks Manage, BIM 360 / ACC, AutoCAD"]
    ],
    desc: "Phase 4 expands one of Qatar's leading equestrian venues: a new grandstand and spectator precinct, a repurposed existing grandstand, a 2.4 km racetrack with a new straight, inner warm-up tracks, an underground service tunnel and a full race-day precinct (stables, parade rings, saddling, sampling and broadcast facilities), coordinated through a fully federated BIM model issued in stages.",
    bullets: [
      "Lead BIM for architecture and structure across 8 stable blocks, new and upgraded grandstands, broadcast, saddling, sampling, substation and support buildings, working alongside dedicated MEP and civil coordinators.",
      "Prepare the MIDP and TIDPs, set up models on shared coordinates and project parameters, run cross-discipline checks and clash reporting, and prepare deliverables for each submission.",
      "4 buildings approved Code A and the rest Code B, with no rejections.",
      "Built Dynamo tools that cut parameter setup time by ~60% per building across 8 discipline models, and that generate the site as layered floors so soil layers and levels are visible in the model.",
      "Deliver 4D sequencing linking the construction programme to the federated model, plus 5D quantity reports."
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
      ["Building", "SSDL: 2 basements + ground + 2 floors, ~100 × 100 m footprint; plus a ~1,950 m² Environmental Laboratories extension"],
      ["Model", "LOD 350, issued for approval"],
      ["Value", "~QAR 100m"],
      ["Year", "2025 – present (project initiated 2024)"],
      ["Software", "Revit, Navisworks Manage, BIM 360 / ACC"]
    ],
    desc: "Qatar's first neutron-calibration facility: the Secondary Standards Dosimetry Laboratories calibrate and verify radiation measurement equipment for healthcare and research, organised around a central atrium with four wings for laboratories, research, administration and support. The scope also includes a major extension to the Environmental Laboratories in Mesaimeer.",
    bullets: [
      "Architectural BIM coordination and cross-discipline clash resolution across architecture, structure and MEP.",
      "Delivered 4D sequencing and 5D data development to support programme and cost tracking.",
      "Generated and delivered COBie data for facility handover."
    ]
  },

  ose: {
    title: "OSE, Outfield Spectator Experience",
    images: ["ose-1", "ose-2", "ose-3", "ose-4", "ose-5"],
    meta: [
      ["Location", "Qiddiya City, Saudi Arabia"],
      ["Role", "BIM Coordinator, contractor side"],
      ["Company", "Focus Design Partners"],
      ["Client", "Test & Training Middle East GmbH / Qiddiya Investment Company"],
      ["Scale", "~150,000 m² motorsports spectator belt"],
      ["Value", "Parent project ~US$500m"],
      ["Stage", "From the start of Detailed Design"],
      ["Year", "2025 – present (project initiated 2024)"],
      ["Software", "Revit, Navisworks Manage, BIM 360 / ACC"]
    ],
    desc: "A scalable spectator environment for Qiddiya City's Motorsports Precinct: a flexible, terraced seating belt that expands for major events (up to ~45,000 spectators) and returns to public parkland between races, integrating 16 buildings, landscape and full site infrastructure.",
    bullets: [
      "4D sequencing and model-based quantity analysis across the spectator belt and supporting facilities.",
      "Executive-level BIM reporting to client leadership on coordination and delivery status.",
      "Coordinated BIM deliverables with architecture, landscape and infrastructure disciplines."
    ]
  },

  nmdc: {
    title: "NMDC 2B01 Experience Centre, New Murabba (Mukaab)",
    images: [],
    morePlaceholder: "[an image of NMDC 2B01 you're allowed to share]",
    meta: [
      ["Location", "Riyadh, Saudi Arabia"],
      ["Role", "BIM Architectural Coordinator, interior fit-out"],
      ["Company", "Focus Design Partners"],
      ["Client", "New Murabba, via TXG and ICAD"],
      ["Scope", "Interior fit-out of one building within a ~SAR 5bn development"],
      ["Model", "LOD 300 → LOD 400"],
      ["Year", "[year]"]
    ],
    desc: "The 2B01 Experience Centre at New Murabba (Mukaab) in Riyadh: interior fit-out of one building within a ~SAR 5bn development, modelled and coordinated against the wider project's facade, MEP, core and shell and structural models.",
    bullets: [
      "Interior design modelling and coordination for the architectural fit-out.",
      "Coordinate architectural and MEP fit-out models against the facade, ICAD plumbing/MEP, ICAD core and shell, steel structure and concrete structure models."
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
      ["Stages", "SD → DD → IFC · LOD 300"],
      ["Year", "2024"],
      ["Software", "Revit, Dynamo, Navisworks, BIM 360, AutoCAD"]
    ],
    desc: "A nature-integrated residential community in Dubai with mid-rise buildings, landscaped public spaces and high-end amenities, blending urban comfort with its natural setting.",
    bullets: [
      "Took over the project from a Japanese consultant at concept and issued 2 IFC packages through to contractor handover.",
      "Led architecture discipline BIM coordination with structure and MEP in Revit and Navisworks, resolving cross-discipline issues.",
      "Developed and maintained Revit templates, view standards and project parameters.",
      "Produced detailed design and IFC documentation from design development to tender."
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
      ["Stages", "SD → DD → IFC"],
      ["Year", "2023"],
      ["Software", "Revit, Navisworks, BIM 360, AutoCAD"]
    ],
    desc: "One of Dubai's landmark island projects within the Palm masterplan: high-end villas, beachfront residences and community infrastructure requiring precise coordination between international design teams.",
    bullets: [
      "Model federation and BEP documentation across 2 design teams; met all approvals and deadlines.",
      "Coordinated federated models across architecture, structure and MEP teams.",
      "Created and maintained Revit families, templates and parameters to minimise model errors.",
      "Worked with the Dubai-based consultant team on compliance with local codes."
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
      ["Team", "~10-person team embedded with ~10 Foster + Partners staff"],
      ["Stage", "Detailed Design toward authority approval"],
      ["Value", "~EUR 150m"],
      ["Year", "2025"],
      ["Software", "Revit, Navisworks Manage, Dynamo, AutoCAD"]
    ],
    desc: "A six-month consultancy engagement supporting Foster + Partners on the CPK Airport programme in Poland, focused on facade and roof package coordination and Revit standardisation across the design team.",
    bullets: [
      "Coordinated facade and roof packages and audited federated models.",
      "Built a parametric Revit curtain wall plugin that loads manufacturer mullion profiles and generates the family automatically, cutting facade and roof clashes by ~20% and speeding up setup on repetitive bays.",
      "Helped develop the initial concept and prototype of the practice's first AI-assisted Revit plugin.",
      "Introduced Dynamo automation for annotation and routine modelling, and trained 5 team members to competent Dynamo users."
    ]
  },

  amaala: {
    title: "Amaala Staff Village",
    images: ["amaala-2", "amaala-1", "amaala-3", "amaala-4", "amaala-5"],
    meta: [
      ["Location", "Red Sea coast, Saudi Arabia"],
      ["Role", "Architect / BIM Coordinator, technical lead in the concept design team"],
      ["Company", "Studio I, Sarajevo"],
      ["Value", "~SAR 1.7bn (Amaala Village masterplan)"],
      ["Stages", "Concept → SD → DD → IFC · LOD 300 → 350 → 400"],
      ["Year", "2023"],
      ["Software", "Revit, BIM 360, AutoCAD"]
    ],
    desc: "Part of Saudi Arabia's Vision 2030: a large residential development for the workforce supporting the Amaala luxury destination on the Red Sea coast, with residential units, community facilities and infrastructure built to high standards of sustainability and operational efficiency.",
    bullets: [
      "Member of the concept design team for one building as technical lead, drafter and modeller; presented massing options and FLS corridor layouts to the client.",
      "Coordinated federated models across architecture, structure and MEP in Revit and BIM 360.",
      "Delivered 3 documentation packages on an 8-week programme, meeting the client's LOD 400 requirement."
    ]
  },

  khalifa: {
    title: "Khalifa City Residential Development",
    images: ["khalifa-1", "khalifa-2", "khalifa-3", "khalifa-4", "khalifa-5", "khalifa-6", "khalifa-7"],
    meta: [
      ["Location", "Abu Dhabi, UAE"],
      ["Role", "Senior Architect / Designer"],
      ["Stages", "Concept → Schematic Design"],
      ["Company", "Studio I, Sarajevo"],
      ["Year", "2023"],
      ["Software", "Revit, SketchUp, AutoCAD, Photoshop"]
    ],
    desc: "A high-end residential development in Abu Dhabi: upscale 2- to 4-bedroom apartments with rental units over basement parking, 5 levels and rooftop amenities including a gym, taken from concept through schematic design.",
    bullets: [
      "Led a 5-person team from concept through schematic design.",
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
      ["Stages", "SD → DD → IFA / IFC · LOD 300"],
      ["Year", "2024"],
      ["Software", "Revit, Dynamo, AutoCAD, BIM 360"]
    ],
    desc: "A mixed-use waterfront development in Sharjah with mid-rise residential buildings, retail and public promenades overlooking the Arabian Gulf, part of a wider urban regeneration effort.",
    bullets: [
      "Design documentation and multidisciplinary coordination through to construction issue.",
      "Created and managed architectural BIM models across multiple building types.",
      "Prepared detailed drawings, schedules and documentation packages for design and tender.",
      "Used Dynamo to streamline repetitive modelling and annotation."
    ]
  },

  bjelasnica: {
    title: "Bjelašnica Ski-Resort Masterplan Study",
    images: ["bjelasnica-1", "bjelasnica-2", "bjelasnica-3", "bjelasnica-4", "bjelasnica-5"],
    meta: [
      ["Location", "Bjelašnica, Bosnia & Herzegovina"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "A masterplan study for a ski resort on Bjelašnica: four renders of the resort village, lifts and ski slopes, and the masterplan of ski runs across the mountain. [a few lines on the brief, your design approach and your role]",
    bullets: []
  },

  breka: {
    title: "Residential Building, Breka",
    images: ["breka-1", "breka-2", "breka-3", "breka-4", "breka-5", "breka-6"],
    meta: [
      ["Location", "Breka, Sarajevo, Bosnia & Herzegovina"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Building", "3 underground garage levels + ground floor + 10 upper floors (~31.6 m)"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "A residential building on a sloping site in Breka, Sarajevo, shown in three elevations, two floor plans and a section. [a few lines on the brief, your design approach and your role]",
    bullets: []
  },

  vrace: {
    title: "Residential Villa [project name]",
    images: ["vrace-1", "vrace-2", "vrace-3", "vrace-4", "vrace-5"],
    meta: [
      ["Location", "Sarajevo, Bosnia & Herzegovina [confirm]"],
      ["Role", "Project Designer"],
      ["Company", "Tekton Studio, Sarajevo"],
      ["Building", "Two units (Lamela A and B): garage level + ground floor + first floor, flat roof, pool"],
      ["Year", "2019 – 2022 [exact year]"]
    ],
    desc: "A two-unit residential villa on a sloping site in brick and glass, shown in three renders, a floor plan and sections. [a few lines on the brief, your design approach and your role]",
    bullets: []
  }
};
