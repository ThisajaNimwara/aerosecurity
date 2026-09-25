import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as RadioTower, d as FileSearch, f as Crosshair, i as Shield, m as Bot, n as TriangleAlert, o as Satellite, s as Radio } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BIQwfv61.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var APP_NAME = "aerosecurity.space";
var NAV = [
	{
		href: "/",
		id: "platform",
		label: "Platform"
	},
	{
		href: "/solutions",
		id: "solutions",
		label: "Solutions"
	},
	{
		href: "/insights",
		id: "insights",
		label: "Insights"
	},
	{
		href: "/about",
		id: "about",
		label: "About"
	},
	{
		href: "/contact",
		id: "contact",
		label: "Contact"
	}
];
var SOLUTIONS_NAV_ITEMS = [
	"Low-Power RTOS EDR/XDR (NASA cFS, VxWorks, RTEMS)",
	"Centralized UAV Control Plane & Patch Management (CEMP)",
	"Onboard Visibility for Closed-Source RF Protocol Drones",
	"Zero Trust SASE for Inter-Satellite Links (ISL)",
	"Cyber-Physical HITL Exploitation & Simulation Testbed",
	"Pre-Flight Software Hardening Tool",
	"Secure AI Agents for Aerospace Security"
];
var SOLUTION_DETAILS = [
	{
		id: "sol-1",
		index: "01",
		nav: SOLUTIONS_NAV_ITEMS[0],
		title: "Low-Power RTOS EDR/XDR",
		kicker: "Embedded · Real-time · Air-gapped capable",
		body: "Lightweight endpoint detection and response that lives inside the flight image — NASA cFS, VxWorks 7, and RTEMS 6 — without breaking worst-case execution time.",
		problem: "Classic EDR agents assume POSIX, RAM, and a friendly scheduler. Flight computers have none of that, and a missed minor frame is a lost vehicle.",
		control: "A single C99 compilation unit with a deterministic watchdog, inline telemetry bus inspection, and a signed event tape that survives brownouts.",
		fit: "On-orbit cFS stacks, tactical UAV autopilots, and any VxWorks/RTEMS box that already has a 1553, SpaceWire, or CAN FD budget.",
		platforms: [
			"NASA cFS",
			"VxWorks 7",
			"RTEMS 6",
			"MIL-STD-1553",
			"SpaceWire"
		],
		specs: [
			{
				k: "WCET budget",
				v: "< 180 µs / frame"
			},
			{
				k: "Footprint",
				v: "96 KB flash · 28 KB RAM"
			},
			{
				k: "TDP",
				v: "Fits a 2 W envelope"
			}
		],
		icon: Shield,
		span: "md:col-span-6 lg:col-span-4 lg:row-span-2"
	},
	{
		id: "sol-2",
		index: "02",
		nav: SOLUTIONS_NAV_ITEMS[1],
		title: "Centralized UAV Control Plane (CEMP)",
		kicker: "Fleet policy · OTA · Kill-chain containment",
		body: "One control plane for mixed-vendor airframes: over-the-air deployment, fleet policy, automated patching, and a kill-chain that can isolate a bird without grounding the swarm.",
		problem: "UAV fleets grow faster than the people who can SSH into them. Patch lag, mixed autopilots, and compromised C2 links are now the default.",
		control: "CEMP binds every airframe to a signed enclave, stages patches in a pre-flight window, and can quarantine a node while the rest of the fleet keeps flying.",
		fit: "Beyond-line-of-sight ISR, logistics drones, and mixed-vendor tactical UAS operating under contested spectrum.",
		platforms: [
			"MAVLink",
			"STANAG 4586",
			"Custom C2",
			"OTA HSM"
		],
		specs: [
			{
				k: "Patch window",
				v: "Pre-flight / loiter"
			},
			{
				k: "Enclave rotation",
				v: "15 min bearer"
			},
			{
				k: "Fleet size",
				v: "Proven at 2,400+"
			}
		],
		icon: Radio,
		span: "md:col-span-3 lg:col-span-2"
	},
	{
		id: "sol-3",
		index: "03",
		nav: SOLUTIONS_NAV_ITEMS[2],
		title: "Onboard Visibility for Closed-Source RF",
		kicker: "DPI · Protocol decode · Proprietary radios",
		body: "Real-time deep packet inspection and protocol decoding across proprietary radio frequencies and telemetry buses — including closed-source RF stacks you cannot instrument from the ground.",
		problem: "Most commercial and tactical drones speak radios nobody publishes. Ground-based SIGINT sees the envelope, not the payload.",
		control: "An onboard inspector that fingerprints undocumented framing, flags replay and injection, and streams a sanitized event tape to CEMP.",
		fit: "Closed-source COTS drones, analog/digital hybrid links, and any airframe whose radio vendor will not give you a spec.",
		platforms: [
			"S-band",
			"L-band",
			"FHSS",
			"COFDM",
			"Custom PHY"
		],
		specs: [
			{
				k: "Decode lag",
				v: "Sub-frame"
			},
			{
				k: "Fingerprints",
				v: "140+ families"
			},
			{
				k: "Export",
				v: "ITAR-reviewed"
			}
		],
		icon: RadioTower,
		span: "md:col-span-3 lg:col-span-2"
	},
	{
		id: "sol-4",
		index: "04",
		nav: SOLUTIONS_NAV_ITEMS[3],
		title: "Zero Trust SASE for ISL",
		kicker: "Optical + RF mesh · Identity-bound",
		body: "Cryptographically verified mesh security for inter-satellite links. Every hop is identity-bound, every key rotates, every bus is isolated from the payload.",
		problem: "LEO meshes treat the optical crosslink as a trusted LAN. A single compromised bird becomes a lateral-movement path across the constellation.",
		control: "Zero-trust SASE at the ISL: mutual attestation, automatic key rotation, and bus isolation so a payload compromise cannot talk to the mesh.",
		fit: "LEO / MEO constellations, optical crosslinks, and any multi-hop space network that still assumes a friendly neighbor.",
		platforms: [
			"Optical ISL",
			"RF ISL",
			"CCSDS",
			"SpaceWire"
		],
		specs: [
			{
				k: "Handshake",
				v: "< 12 ms"
			},
			{
				k: "Key rotation",
				v: "Per-pass"
			},
			{
				k: "Isolation",
				v: "Payload ⊄ mesh"
			}
		],
		icon: Satellite,
		span: "md:col-span-2"
	},
	{
		id: "sol-5",
		index: "05",
		nav: SOLUTIONS_NAV_ITEMS[4],
		title: "Cyber-Physical HITL Testbed",
		kicker: "Adversary emulation · Range-grade",
		body: "A hardware-in-the-loop cyber testing ground that speaks the same buses, radios, and flight software the vehicle will fly — then tries to break them.",
		problem: "Tabletop red-team reports do not survive first contact with a real 1553 bus or a real FHSS radio.",
		control: "The range couples RF anechoic, bus injection, and flight-software replay so you can run kill-chains against the actual stack before it leaves the hangar.",
		fit: "Program offices, primes, and operators who need to prove a control works on the metal, not in a slide.",
		platforms: [
			"1553B",
			"CAN FD",
			"MAVLink",
			"cFS",
			"Anechoic RF"
		],
		specs: [
			{
				k: "Sites",
				v: "Colombo · USA"
			},
			{
				k: "Buses",
				v: "Flight-identical"
			},
			{
				k: "Campaigns",
				v: "NDA / CUI"
			}
		],
		icon: Crosshair,
		span: "md:col-span-2"
	},
	{
		id: "sol-6",
		index: "06",
		nav: SOLUTIONS_NAV_ITEMS[5],
		title: "Pre-Flight Software Hardening",
		kicker: "Static analysis · Binary seal · Compliance",
		body: "Automated static analysis, binary sanitization, and compliance validation that runs in the pre-flight window — before the image ever touches hardware.",
		problem: "Flight software freezes months before launch. A late CVE or an unsigned object file is how missions ship with known holes.",
		control: "A hardening pipeline that scans, strips, signs, and seals the flight image against DO-178C and CSfC-aligned checks, then refuses to load anything that drifted.",
		fit: "Any program that still treats 'the binary on the gold stick' as the source of truth.",
		platforms: [
			"cFS",
			"VxWorks",
			"RTEMS",
			"DO-178C",
			"CSfC"
		],
		specs: [
			{
				k: "Gate",
				v: "Fail-closed"
			},
			{
				k: "SBOM",
				v: "Signed, hashed"
			},
			{
				k: "Window",
				v: "Pre-flight"
			}
		],
		icon: FileSearch,
		span: "md:col-span-2"
	},
	{
		id: "sol-7",
		index: "07",
		nav: SOLUTIONS_NAV_ITEMS[6],
		title: "Secure AI Agents",
		kicker: "On-device · Anomaly · EW mitigation",
		body: "Autonomous on-device models for anomaly detection and real-time electronic-warfare mitigation — trained offline, sealed on the bird, never phoning home.",
		problem: "Cloud inference is a luxury orbital and tactical vehicles do not have. Shipping an open model to the edge is just a new attack surface.",
		control: "Agents compile into the same RTOS budget as the EDR core, run against the event tape, and can trigger CEMP containment without a ground loop.",
		fit: "Contested EW environments, denied-link ISR, and constellations that must classify a threat in the same pass they see it.",
		platforms: [
			"On-device NPU",
			"cFS app",
			"CEMP trigger",
			"Air-gapped train"
		],
		specs: [
			{
				k: "Infer",
				v: "On-box only"
			},
			{
				k: "Model seal",
				v: "Pre-flight signed"
			},
			{
				k: "Loop",
				v: "No ground required"
			}
		],
		icon: Bot,
		span: "md:col-span-6"
	}
];
SOLUTION_DETAILS.map(({ index, title, body, icon, span }) => ({
	index,
	title,
	body,
	icon,
	span
}));
var NAV_OVERLAY = [
	{
		id: "ov-platform",
		label: "Platform",
		href: "/"
	},
	{
		id: "ov-solutions",
		label: "Solutions",
		href: "/solutions",
		subs: SOLUTION_DETAILS.map((s) => ({
			label: s.nav,
			href: `/solutions#${s.id}`
		}))
	},
	{
		id: "ov-about",
		label: "About",
		href: "/about",
		subs: [
			{
				label: "Who we are",
				href: "/about#who-we-are"
			},
			{
				label: "What we do",
				href: "/about#what-we-do"
			},
			{
				label: "Careers",
				href: "/about#careers"
			},
			{
				label: "Investments and partnerships",
				href: "/about#investments"
			}
		]
	},
	{
		id: "ov-insights",
		label: "Insights",
		href: "/insights",
		note: "Research papers and press releases"
	},
	{
		id: "ov-contact",
		label: "Contact",
		href: "/contact"
	}
];
var MARKETS = [
	{
		index: "01",
		title: "Autonomous UAV Fleets",
		body: "Policy, patching, and kill-chain containment for mixed-vendor airframes — commercial logistics drones and defense UAS."
	},
	{
		index: "02",
		title: "LEO / MEO Constellations",
		body: "Identity-bound optical and RF inter-satellite links for commercial LEO operators and national constellations."
	},
	{
		index: "03",
		title: "Tactical Avionics",
		body: "EDR that fits inside real-time budgets — cFS, VxWorks, and RTEMS — without breaking WCET."
	},
	{
		index: "04",
		title: "Ground & Range Systems",
		body: "HITL adversary emulation against the same buses, radios, and flight software that fly."
	}
];
var RESEARCH = [
	{
		id: "AS-TR-2026-04",
		title: "Adversarial RF Injection in cFS Telemetry Buses",
		pages: "14 pp",
		date: "2026.03",
		abstract: "We demonstrate a class of framed-injection attacks against NASA cFS telemetry that survive standard CRC and show how the RTOS EDR agent detects them inside the allotted minor frame."
	},
	{
		id: "AS-TR-2026-09",
		title: "Zero-Trust Mesh Handshakes for Optical ISL",
		pages: "22 pp",
		date: "2026.06",
		abstract: "A mutual-attestation handshake for optical crosslinks that completes in under 12 ms and isolates payload buses from the mesh even when a neighbor is fully compromised."
	},
	{
		id: "AS-TR-2026-11",
		title: "On-Device EW Classification under a 2W TDP Envelope",
		pages: "11 pp",
		date: "2026.08",
		abstract: "An on-box classifier for contested spectrum that fits the same power envelope as the flight computer and never phones home for inference."
	},
	{
		id: "AS-TR-2026-14",
		title: "Pre-Flight Binary Drift as an Attack Surface",
		pages: "18 pp",
		date: "2026.09",
		abstract: "Unsigned object files and late-linked vendor blobs are how known CVEs still reach the gold stick. We map the failure modes and the fail-closed hardening gate that stops them."
	}
];
var PRESS = [
	{
		id: "pr-2026-08",
		date: "2026.08.12",
		title: "AeroSecurity selected for USSF CSO pitch day",
		dek: "The CEMP control plane and RTOS EDR agent were selected for a closed-session brief with Space Force commercial integration.",
		body: "United States — AeroSecurity was selected to brief the U.S. Space Force Commercial Space Office on the CEMP control plane and the low-power RTOS EDR agent. The session covered dual-use deployment across commercial LEO constellations and defense unmanned systems. Full remarks remain under CUI handling."
	},
	{
		id: "pr-2026-06",
		date: "2026.06.04",
		title: "CEMP 4.2 general availability",
		dek: "Fleet policy, pre-flight patch windows, and 15-minute enclave rotation now ship as a single release.",
		body: "CEMP 4.2 is generally available to cleared customers. The release unifies over-the-air patch staging, kill-chain containment, and bearer-token rotation against a ground HSM. Migration notes ship over a cleared channel."
	},
	{
		id: "pr-2026-03",
		date: "2026.03.18",
		title: "HITL range expansion in Colombo",
		dek: "A second anechoic chamber and a flight-identical 1553/SpaceWire bench come online at the Colombo R&D center.",
		body: "The Colombo site now runs parallel adversary-emulation campaigns against the same buses and radios that fly. Program offices can book range time under NDA; availability is scheduled, not walk-in."
	},
	{
		id: "pr-2025-11",
		date: "2025.11.20",
		title: "Facility clearance granted",
		dek: "AeroSecurity’s U.S. corporate entity is now cleared, covering CUI handling for program work and HITL campaigns.",
		body: "Facility clearance covers the U.S. corporate entity and program work coordinated from the Colombo R&D center. Visitors still require sponsorship. Marketing surfaces on this site remain unclassified."
	}
];
var CAREERS = [
	{
		id: "rtos",
		role: "Embedded RTOS Engineer",
		site: "Colombo, Sri Lanka",
		type: "Full-time · Cleared preferred",
		body: "Own the C99 EDR agent across NASA cFS, VxWorks, and RTEMS. You will fight for microseconds and treat WCET as a product requirement, not a footnote."
	},
	{
		id: "rf",
		role: "RF Protocol Analyst",
		site: "Colombo, Sri Lanka",
		type: "Full-time · Range-based",
		body: "Fingerprint closed-source drone radios, write decoders, and sit in the anechoic chamber until the injection is reproducible."
	},
	{
		id: "hitl",
		role: "Offensive Security Engineer (HITL)",
		site: "Colombo, Sri Lanka",
		type: "Full-time · Range-based",
		body: "Build kill-chains against flight-identical buses and radios. If it only works in a VM, it does not ship."
	},
	{
		id: "fwd",
		role: "Forward Deployed Engineer",
		site: "Hybrid · USA / APAC",
		type: "Full-time · Travel",
		body: "Stand up CEMP enclaves with program offices and primes. You are the person who makes the control plane real on their network."
	}
];
var PARTNERSHIPS = [
	{
		title: "Primes",
		body: "We embed as a cyber-physical control plane inside existing airframes, buses, and ground segments — not as a competing vehicle."
	},
	{
		title: "Operators",
		body: "Fleet and constellation operators run CEMP against mixed-vendor inventories with a single policy and a single patch window."
	},
	{
		title: "Strategic investors",
		body: "We work with funds that understand dual-use, export control, and the length of a flight-software cycle."
	}
];
var TELEMETRY_ROWS = [
	{
		id: "01",
		name: "GPS",
		status: "OK"
	},
	{
		id: "02",
		name: "RADAR",
		status: "SECURE"
	},
	{
		id: "03",
		name: "RF BUS",
		status: "ENCRYPTED"
	},
	{
		id: "04",
		name: "ISL MESH",
		status: "LOCKED"
	},
	{
		id: "05",
		name: "IMU",
		status: "OK"
	},
	{
		id: "06",
		name: "C2 LINK",
		status: "SECURE"
	},
	{
		id: "07",
		name: "WATCHDOG",
		status: "ARMED"
	},
	{
		id: "08",
		name: "EDR AGENT",
		status: "LIVE"
	}
];
var THREAT_NODES = [
	{
		id: "leo-12",
		x: 430,
		y: 78,
		label: "LEO-12",
		status: "alert"
	},
	{
		id: "uav-7",
		x: 168,
		y: 214,
		label: "UAV-FLEET-7",
		status: "watch"
	},
	{
		id: "gnd-a",
		x: 248,
		y: 292,
		label: "GND-ALPHA",
		status: "secure"
	},
	{
		id: "isl",
		x: 512,
		y: 168,
		label: "ISL-MESH",
		status: "secure"
	},
	{
		id: "sat-k",
		x: 352,
		y: 148,
		label: "SAT-K",
		status: "watch"
	},
	{
		id: "polar",
		x: 318,
		y: 42,
		label: "POLAR-GATE",
		status: "secure"
	},
	{
		id: "range",
		x: 108,
		y: 318,
		label: "HITL-RANGE",
		status: "secure"
	},
	{
		id: "rf-9",
		x: 556,
		y: 268,
		label: "RF-9",
		status: "alert"
	}
];
var COMPLIANCE = [
	"CSfC Ready",
	"DO-178C",
	"NIST SP 800-171"
];
var FACTS = [
	{
		k: "Founded",
		v: "2026"
	},
	{
		k: "R&D",
		v: "Colombo, Sri Lanka"
	},
	{
		k: "Corporate",
		v: "United States"
	},
	{
		k: "Clearance",
		v: "Facility cleared"
	}
];
var styles_default = "/assets/styles-BffAfEl7.css";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — Operational Intelligence for Aerospace` },
			{
				name: "description",
				content: "Dual-use cybersecurity for commercial LEO constellations and defense unmanned systems. R&D in Colombo, Sri Lanka. Corporate entity in the United States."
			},
			{
				name: "theme-color",
				content: "#090A0F"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$7 = () => import("./routes-DcaDxIYp.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./about-BlFDC_A_.mjs");
var Route$6 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./contact-BWSh87v1.mjs");
var Route$5 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./export-Cycaybme.mjs");
var Route$4 = createFileRoute("/export")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./insights-BV3CWssv.mjs");
var Route$3 = createFileRoute("/insights")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./privacy-e3tkO0L1.mjs");
var Route$2 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./solutions-ZAjAL33U.mjs");
var Route$1 = createFileRoute("/solutions")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./terms-CZpS4XUq.mjs");
var Route = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	ExportRoute: Route$4.update({
		id: "/export",
		path: "/export",
		getParentRoute: () => Route$8
	}),
	InsightsRoute: Route$3.update({
		id: "/insights",
		path: "/insights",
		getParentRoute: () => Route$8
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$8
	}),
	SolutionsRoute: Route$1.update({
		id: "/solutions",
		path: "/solutions",
		getParentRoute: () => Route$8
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultHashScrollIntoView: {
			behavior: "smooth",
			block: "start"
		}
	});
}
//#endregion
export { MARKETS as a, PARTNERSHIPS as c, SOLUTION_DETAILS as d, TELEMETRY_ROWS as f, FACTS as i, PRESS as l, CAREERS as n, NAV as o, THREAT_NODES as p, COMPLIANCE as r, NAV_OVERLAY as s, router_exports as t, RESEARCH as u };
