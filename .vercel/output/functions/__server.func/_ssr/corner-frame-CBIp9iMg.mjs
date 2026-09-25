import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cn } from "./reveal-BenA13yG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/corner-frame-CBIp9iMg.js
var import_jsx_runtime = require_jsx_runtime();
/** Canonical hex tokens — keep in lockstep with `@theme` in `src/styles.css`. */
var palette = {
	bg: "#090A0F",
	surface: "#14151C",
	surface2: "#1A1B24",
	border: "#2A2B35",
	primary: "#D92D20",
	signal: "#00FF66",
	warn: "#E3A008",
	fg: "#F8F9FA",
	muted: "#A0AEC0",
	menu: "#ECECE6",
	menuFg: "#101010"
};
function CornerFrame({ className, active = false }) {
	const tick = cn("absolute h-2.5 w-2.5 border-border transition-colors duration-150", active && "border-primary");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-0", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn(tick, "top-0 left-0 border-t border-l") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn(tick, "top-0 right-0 border-t border-r") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn(tick, "bottom-0 left-0 border-b border-l") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn(tick, "right-0 bottom-0 border-b border-r") })
		]
	});
}
//#endregion
export { palette as n, CornerFrame as t };
