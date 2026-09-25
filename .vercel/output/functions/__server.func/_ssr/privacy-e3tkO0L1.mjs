import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as PageShell, r as Reveal } from "./reveal-BenA13yG.mjs";
import { t as PageHeader } from "./page-header-Ed3B_R4K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-e3tkO0L1.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "What we collect",
		body: "Briefing requests are handled through the Cal.com scheduler on the Contact page (name, work email, and meeting notes). This marketing surface does not use third-party advertising pixels."
	},
	{
		title: "How we use it",
		body: "Contact data is used to open a secure follow-up path with a specialist. We do not sell it. Program work, if it proceeds, moves onto a cleared system that is not this website."
	},
	{
		title: "CUI and classified material",
		body: "Do not submit CUI, classified, or export-controlled technical data through the public scheduler. If a program requires it, we will open a channel that is built for that handling."
	},
	{
		title: "Retention",
		body: "Marketing-surface requests are deleted after triage or after 18 months, whichever is sooner, unless a contract requires otherwise."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		index: "06",
		label: "Legal",
		title: "Privacy.",
		intro: "This is the unclassified marketing surface. It is not a system of record for program data."
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
export { PrivacyPage as component };
