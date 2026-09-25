import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Crosshair,
  FileSearch,
  Radio,
  RadioTower,
  Satellite,
  Shield,
} from "lucide-react";

export const APP_NAME = "aerosecurity.space";

export const NAV = [
  { href: "/", id: "platform", label: "Platform" },
  { href: "/solutions", id: "solutions", label: "Solutions" },
  { href: "/insights", id: "insights", label: "Insights" },
  { href: "/about", id: "about", label: "About" },
  { href: "/contact", id: "contact", label: "Contact" },
] as const;

export type NavOverlaySub = {
  label: string;
  href: string;
};

export type NavOverlayItem = {
  id: string;
  label: string;
  href: string;
  note?: string;
  subs?: NavOverlaySub[];
};

export const SOLUTIONS_NAV_ITEMS = [
  "Low-Power RTOS EDR/XDR (NASA cFS, VxWorks, RTEMS)",
  "Centralized UAV Control Plane & Patch Management (CEMP)",
  "Onboard Visibility for Closed-Source RF Protocol Drones",
  "Zero Trust SASE for Inter-Satellite Links (ISL)",
  "Cyber-Physical HITL Exploitation & Simulation Testbed",
  "Pre-Flight Software Hardening Tool",
  "Secure AI Agents for Aerospace Security",
] as const;

export type SolutionDetail = {
  id: string;
  index: string;
  nav: string;
  title: string;
  kicker: string;
  body: string;
  problem: string;
  control: string;
  fit: string;
  platforms: string[];
  specs: { k: string; v: string }[];
  icon: LucideIcon;
  span: string;
};

export const SOLUTION_DETAILS: SolutionDetail[] = [
  {
    id: "sol-1",
    index: "01",
    nav: SOLUTIONS_NAV_ITEMS[0],
    title: "Low-Power RTOS EDR/XDR",
    kicker: "Embedded · Real-time · Air-gapped capable",
    body: "Lightweight endpoint detection and response that lives inside the flight image — NASA cFS, VxWorks 7, and RTEMS 6 — without breaking worst-case execution time.",
    problem:
      "Classic EDR agents assume POSIX, RAM, and a friendly scheduler. Flight computers have none of that, and a missed minor frame is a lost vehicle.",
    control:
      "A single C99 compilation unit with a deterministic watchdog, inline telemetry bus inspection, and a signed event tape that survives brownouts.",
    fit: "On-orbit cFS stacks, tactical UAV autopilots, and any VxWorks/RTEMS box that already has a 1553, SpaceWire, or CAN FD budget.",
    platforms: ["NASA cFS", "VxWorks 7", "RTEMS 6", "MIL-STD-1553", "SpaceWire"],
    specs: [
      { k: "WCET budget", v: "< 180 µs / frame" },
      { k: "Footprint", v: "96 KB flash · 28 KB RAM" },
      { k: "TDP", v: "Fits a 2 W envelope" },
    ],
    icon: Shield,
    span: "md:col-span-6 lg:col-span-4 lg:row-span-2",
  },
  {
    id: "sol-2",
    index: "02",
    nav: SOLUTIONS_NAV_ITEMS[1],
    title: "Centralized UAV Control Plane (CEMP)",
    kicker: "Fleet policy · OTA · Kill-chain containment",
    body: "One control plane for mixed-vendor airframes: over-the-air deployment, fleet policy, automated patching, and a kill-chain that can isolate a bird without grounding the swarm.",
    problem:
      "UAV fleets grow faster than the people who can SSH into them. Patch lag, mixed autopilots, and compromised C2 links are now the default.",
    control:
      "CEMP binds every airframe to a signed enclave, stages patches in a pre-flight window, and can quarantine a node while the rest of the fleet keeps flying.",
    fit: "Beyond-line-of-sight ISR, logistics drones, and mixed-vendor tactical UAS operating under contested spectrum.",
    platforms: ["MAVLink", "STANAG 4586", "Custom C2", "OTA HSM"],
    specs: [
      { k: "Patch window", v: "Pre-flight / loiter" },
      { k: "Enclave rotation", v: "15 min bearer" },
      { k: "Fleet size", v: "Proven at 2,400+" },
    ],
    icon: Radio,
    span: "md:col-span-3 lg:col-span-2",
  },
  {
    id: "sol-3",
    index: "03",
    nav: SOLUTIONS_NAV_ITEMS[2],
    title: "Onboard Visibility for Closed-Source RF",
    kicker: "DPI · Protocol decode · Proprietary radios",
    body: "Real-time deep packet inspection and protocol decoding across proprietary radio frequencies and telemetry buses — including closed-source RF stacks you cannot instrument from the ground.",
    problem:
      "Most commercial and tactical drones speak radios nobody publishes. Ground-based SIGINT sees the envelope, not the payload.",
    control:
      "An onboard inspector that fingerprints undocumented framing, flags replay and injection, and streams a sanitized event tape to CEMP.",
    fit: "Closed-source COTS drones, analog/digital hybrid links, and any airframe whose radio vendor will not give you a spec.",
    platforms: ["S-band", "L-band", "FHSS", "COFDM", "Custom PHY"],
    specs: [
      { k: "Decode lag", v: "Sub-frame" },
      { k: "Fingerprints", v: "140+ families" },
      { k: "Export", v: "ITAR-reviewed" },
    ],
    icon: RadioTower,
    span: "md:col-span-3 lg:col-span-2",
  },
  {
    id: "sol-4",
    index: "04",
    nav: SOLUTIONS_NAV_ITEMS[3],
    title: "Zero Trust SASE for ISL",
    kicker: "Optical + RF mesh · Identity-bound",
    body: "Cryptographically verified mesh security for inter-satellite links. Every hop is identity-bound, every key rotates, every bus is isolated from the payload.",
    problem:
      "LEO meshes treat the optical crosslink as a trusted LAN. A single compromised bird becomes a lateral-movement path across the constellation.",
    control:
      "Zero-trust SASE at the ISL: mutual attestation, automatic key rotation, and bus isolation so a payload compromise cannot talk to the mesh.",
    fit: "LEO / MEO constellations, optical crosslinks, and any multi-hop space network that still assumes a friendly neighbor.",
    platforms: ["Optical ISL", "RF ISL", "CCSDS", "SpaceWire"],
    specs: [
      { k: "Handshake", v: "< 12 ms" },
      { k: "Key rotation", v: "Per-pass" },
      { k: "Isolation", v: "Payload ⊄ mesh" },
    ],
    icon: Satellite,
    span: "md:col-span-2",
  },
  {
    id: "sol-5",
    index: "05",
    nav: SOLUTIONS_NAV_ITEMS[4],
    title: "Cyber-Physical HITL Testbed",
    kicker: "Adversary emulation · Range-grade",
    body: "A hardware-in-the-loop cyber testing ground that speaks the same buses, radios, and flight software the vehicle will fly — then tries to break them.",
    problem:
      "Tabletop red-team reports do not survive first contact with a real 1553 bus or a real FHSS radio.",
    control:
      "The range couples RF anechoic, bus injection, and flight-software replay so you can run kill-chains against the actual stack before it leaves the hangar.",
    fit: "Program offices, primes, and operators who need to prove a control works on the metal, not in a slide.",
    platforms: ["1553B", "CAN FD", "MAVLink", "cFS", "Anechoic RF"],
    specs: [
      { k: "Sites", v: "Colombo · USA" },
      { k: "Buses", v: "Flight-identical" },
      { k: "Campaigns", v: "NDA / CUI" },
    ],
    icon: Crosshair,
    span: "md:col-span-2",
  },
  {
    id: "sol-6",
    index: "06",
    nav: SOLUTIONS_NAV_ITEMS[5],
    title: "Pre-Flight Software Hardening",
    kicker: "Static analysis · Binary seal · Compliance",
    body: "Automated static analysis, binary sanitization, and compliance validation that runs in the pre-flight window — before the image ever touches hardware.",
    problem:
      "Flight software freezes months before launch. A late CVE or an unsigned object file is how missions ship with known holes.",
    control:
      "A hardening pipeline that scans, strips, signs, and seals the flight image against DO-178C and CSfC-aligned checks, then refuses to load anything that drifted.",
    fit: "Any program that still treats 'the binary on the gold stick' as the source of truth.",
    platforms: ["cFS", "VxWorks", "RTEMS", "DO-178C", "CSfC"],
    specs: [
      { k: "Gate", v: "Fail-closed" },
      { k: "SBOM", v: "Signed, hashed" },
      { k: "Window", v: "Pre-flight" },
    ],
    icon: FileSearch,
    span: "md:col-span-2",
  },
  {
    id: "sol-7",
    index: "07",
    nav: SOLUTIONS_NAV_ITEMS[6],
    title: "Secure AI Agents",
    kicker: "On-device · Anomaly · EW mitigation",
    body: "Autonomous on-device models for anomaly detection and real-time electronic-warfare mitigation — trained offline, sealed on the bird, never phoning home.",
    problem:
      "Cloud inference is a luxury orbital and tactical vehicles do not have. Shipping an open model to the edge is just a new attack surface.",
    control:
      "Agents compile into the same RTOS budget as the EDR core, run against the event tape, and can trigger CEMP containment without a ground loop.",
    fit: "Contested EW environments, denied-link ISR, and constellations that must classify a threat in the same pass they see it.",
    platforms: ["On-device NPU", "cFS app", "CEMP trigger", "Air-gapped train"],
    specs: [
      { k: "Infer", v: "On-box only" },
      { k: "Model seal", v: "Pre-flight signed" },
      { k: "Loop", v: "No ground required" },
    ],
    icon: Bot,
    span: "md:col-span-6",
  },
];

export const CAPABILITIES = SOLUTION_DETAILS.map(
  ({ index, title, body, icon, span }) => ({ index, title, body, icon, span }),
);

export const NAV_OVERLAY: NavOverlayItem[] = [
  { id: "ov-platform", label: "Platform", href: "/" },
  {
    id: "ov-solutions",
    label: "Solutions",
    href: "/solutions",
    subs: SOLUTION_DETAILS.map((s) => ({ label: s.nav, href: `/solutions#${s.id}` })),
  },
  {
    id: "ov-about",
    label: "About",
    href: "/about",
    subs: [
      { label: "Who we are", href: "/about#who-we-are" },
      { label: "What we do", href: "/about#what-we-do" },
      { label: "Careers", href: "/about#careers" },
      { label: "Investments and partnerships", href: "/about#investments" },
    ],
  },
  {
    id: "ov-insights",
    label: "Insights",
    href: "/insights",
    note: "Research papers and press releases",
  },
  { id: "ov-contact", label: "Contact", href: "/contact" },
];

export const MARKETS = [
  {
    index: "01",
    title: "Autonomous UAV Fleets",
    body: "Policy, patching, and kill-chain containment for mixed-vendor airframes — commercial logistics drones and defense UAS.",
  },
  {
    index: "02",
    title: "LEO / MEO Constellations",
    body: "Identity-bound optical and RF inter-satellite links for commercial LEO operators and national constellations.",
  },
  {
    index: "03",
    title: "Tactical Avionics",
    body: "EDR that fits inside real-time budgets — cFS, VxWorks, and RTEMS — without breaking WCET.",
  },
  {
    index: "04",
    title: "Ground & Range Systems",
    body: "HITL adversary emulation against the same buses, radios, and flight software that fly.",
  },
] as const;

export const RESEARCH = [
  {
    id: "AS-TR-2026-04",
    title: "Adversarial RF Injection in cFS Telemetry Buses",
    pages: "14 pp",
    date: "2026.03",
    abstract:
      "We demonstrate a class of framed-injection attacks against NASA cFS telemetry that survive standard CRC and show how the RTOS EDR agent detects them inside the allotted minor frame.",
  },
  {
    id: "AS-TR-2026-09",
    title: "Zero-Trust Mesh Handshakes for Optical ISL",
    pages: "22 pp",
    date: "2026.06",
    abstract:
      "A mutual-attestation handshake for optical crosslinks that completes in under 12 ms and isolates payload buses from the mesh even when a neighbor is fully compromised.",
  },
  {
    id: "AS-TR-2026-11",
    title: "On-Device EW Classification under a 2W TDP Envelope",
    pages: "11 pp",
    date: "2026.08",
    abstract:
      "An on-box classifier for contested spectrum that fits the same power envelope as the flight computer and never phones home for inference.",
  },
  {
    id: "AS-TR-2026-14",
    title: "Pre-Flight Binary Drift as an Attack Surface",
    pages: "18 pp",
    date: "2026.09",
    abstract:
      "Unsigned object files and late-linked vendor blobs are how known CVEs still reach the gold stick. We map the failure modes and the fail-closed hardening gate that stops them.",
  },
] as const;

export const PRESS = [
  {
    id: "pr-2026-08",
    date: "2026.08.12",
    title: "AeroSecurity selected for USSF CSO pitch day",
    dek: "The CEMP control plane and RTOS EDR agent were selected for a closed-session brief with Space Force commercial integration.",
    body: "United States — AeroSecurity was selected to brief the U.S. Space Force Commercial Space Office on the CEMP control plane and the low-power RTOS EDR agent. The session covered dual-use deployment across commercial LEO constellations and defense unmanned systems. Full remarks remain under CUI handling.",
  },
  {
    id: "pr-2026-06",
    date: "2026.06.04",
    title: "CEMP 4.2 general availability",
    dek: "Fleet policy, pre-flight patch windows, and 15-minute enclave rotation now ship as a single release.",
    body: "CEMP 4.2 is generally available to cleared customers. The release unifies over-the-air patch staging, kill-chain containment, and bearer-token rotation against a ground HSM. Migration notes ship over a cleared channel.",
  },
  {
    id: "pr-2026-03",
    date: "2026.03.18",
    title: "HITL range expansion in Colombo",
    dek: "A second anechoic chamber and a flight-identical 1553/SpaceWire bench come online at the Colombo R&D center.",
    body: "The Colombo site now runs parallel adversary-emulation campaigns against the same buses and radios that fly. Program offices can book range time under NDA; availability is scheduled, not walk-in.",
  },
  {
    id: "pr-2025-11",
    date: "2025.11.20",
    title: "Facility clearance granted",
    dek: "AeroSecurity’s U.S. corporate entity is now cleared, covering CUI handling for program work and HITL campaigns.",
    body: "Facility clearance covers the U.S. corporate entity and program work coordinated from the Colombo R&D center. Visitors still require sponsorship. Marketing surfaces on this site remain unclassified.",
  },
] as const;

export const CAREERS = [
  {
    id: "rtos",
    role: "Embedded RTOS Engineer",
    site: "Colombo, Sri Lanka",
    type: "Full-time · Cleared preferred",
    body: "Own the C99 EDR agent across NASA cFS, VxWorks, and RTEMS. You will fight for microseconds and treat WCET as a product requirement, not a footnote.",
  },
  {
    id: "rf",
    role: "RF Protocol Analyst",
    site: "Colombo, Sri Lanka",
    type: "Full-time · Range-based",
    body: "Fingerprint closed-source drone radios, write decoders, and sit in the anechoic chamber until the injection is reproducible.",
  },
  {
    id: "hitl",
    role: "Offensive Security Engineer (HITL)",
    site: "Colombo, Sri Lanka",
    type: "Full-time · Range-based",
    body: "Build kill-chains against flight-identical buses and radios. If it only works in a VM, it does not ship.",
  },
  {
    id: "fwd",
    role: "Forward Deployed Engineer",
    site: "Hybrid · USA / APAC",
    type: "Full-time · Travel",
    body: "Stand up CEMP enclaves with program offices and primes. You are the person who makes the control plane real on their network.",
  },
] as const;

export const PARTNERSHIPS = [
  {
    title: "Primes",
    body: "We embed as a cyber-physical control plane inside existing airframes, buses, and ground segments — not as a competing vehicle.",
  },
  {
    title: "Operators",
    body: "Fleet and constellation operators run CEMP against mixed-vendor inventories with a single policy and a single patch window.",
  },
  {
    title: "Strategic investors",
    body: "We work with funds that understand dual-use, export control, and the length of a flight-software cycle.",
  },
] as const;

export const TELEMETRY_ROWS = [
  { id: "01", name: "GPS", status: "OK" },
  { id: "02", name: "RADAR", status: "SECURE" },
  { id: "03", name: "RF BUS", status: "ENCRYPTED" },
  { id: "04", name: "ISL MESH", status: "LOCKED" },
  { id: "05", name: "IMU", status: "OK" },
  { id: "06", name: "C2 LINK", status: "SECURE" },
  { id: "07", name: "WATCHDOG", status: "ARMED" },
  { id: "08", name: "EDR AGENT", status: "LIVE" },
] as const;

export const THREAT_NODES = [
  { id: "leo-12", x: 430, y: 78, label: "LEO-12", status: "alert" as const },
  { id: "uav-7", x: 168, y: 214, label: "UAV-FLEET-7", status: "watch" as const },
  { id: "gnd-a", x: 248, y: 292, label: "GND-ALPHA", status: "secure" as const },
  { id: "isl", x: 512, y: 168, label: "ISL-MESH", status: "secure" as const },
  { id: "sat-k", x: 352, y: 148, label: "SAT-K", status: "watch" as const },
  { id: "polar", x: 318, y: 42, label: "POLAR-GATE", status: "secure" as const },
  { id: "range", x: 108, y: 318, label: "HITL-RANGE", status: "secure" as const },
  { id: "rf-9", x: 556, y: 268, label: "RF-9", status: "alert" as const },
];

export const COMPLIANCE = ["CSfC Ready", "DO-178C", "NIST SP 800-171"] as const;

export const FACTS = [
  { k: "Founded", v: "2026" },
  { k: "R&D", v: "Colombo, Sri Lanka" },
  { k: "Corporate", v: "United States" },
  { k: "Clearance", v: "Facility cleared" },
] as const;

/** Kept for home-page market cards that still import SOLUTIONS. */
export const SOLUTIONS = MARKETS;
