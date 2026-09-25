import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as SectionLabel, r as Reveal } from "./reveal-BenA13yG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-Ed3B_R4K.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ index, label, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl px-4 pt-32 pb-8 sm:px-6 sm:pt-40 sm:pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index,
				label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl lg:text-6xl",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
				children: intro
			}) : null
		] })
	});
}
//#endregion
export { PageHeader as t };
