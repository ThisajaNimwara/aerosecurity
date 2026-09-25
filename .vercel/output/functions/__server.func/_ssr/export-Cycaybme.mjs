import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as PageShell, r as Reveal } from "./reveal-BenA13yG.mjs";
import { t as PageHeader } from "./page-header-Ed3B_R4K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-Cycaybme.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "Jurisdiction",
		body: "AeroSecurity is a U.S. corporate entity with primary R&D in Colombo, Sri Lanka. Certain technical data related to spacecraft, military unmanned vehicles, and associated electronic warfare may be controlled under the ITAR (22 CFR 120–130) or the EAR."
	},
	{
		title: "This website",
		body: "Copy on this marketing surface is reviewed as unclassified and not export-controlled. It is not a substitute for a commodity jurisdiction or classification request."
	},
	{
		title: "CUI handling",
		body: "Do not transmit CUI, technical data, or source through the public scheduler. If a program requires it, we will open a channel built for that handling after identity is established."
	},
	{
		title: "Foreign persons",
		body: "Access to controlled technical data by foreign persons may require a license or other authorization. We do not grant that access from this site."
	}
];
function ExportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		index: "08",
		label: "Legal",
		title: "Export control.",
		intro: "Some of what we build is dual-use. This page is the unclassified notice, not a classification."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 pb-24 sm:px-6 sm:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-10 border-t border-border pt-12",
			children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold tracking-[-0.02em] text-fg",
				children: s.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-muted",
				children: s.body
			})] }, s.title))
		})
	})] });
}
//#endregion
export { ExportPage as component };
