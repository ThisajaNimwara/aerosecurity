import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as FileText } from "../_libs/lucide-react.mjs";
import { l as PRESS, u as RESEARCH } from "./router-BIQwfv61.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as cn, l as useGoContact, n as PageShell, r as Reveal, t as Button } from "./reveal-BenA13yG.mjs";
import { t as PageHeader } from "./page-header-Ed3B_R4K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-BV3CWssv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InsightsPage() {
	const [openPaper, setOpenPaper] = (0, import_react.useState)(null);
	const [openPress, setOpenPress] = (0, import_react.useState)(PRESS[0]?.id ?? null);
	const goContact = useGoContact();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			index: "04",
			label: "Insights",
			title: "Research from the range and the orbit.",
			intro: "Technical reports and press from the HITL range and on-orbit observation campaigns. Full papers ship over a cleared channel."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "papers",
			className: "scroll-mt-28 border-t border-border py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl",
					children: "Research papers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
					children: "Abstracts are unclassified. The rest is queued under NDA."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border border border-border",
					children: RESEARCH.map((paper) => {
						const open = openPaper === paper.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenPaper(open ? null : paper.id),
								className: "flex w-full flex-col gap-2 px-4 py-5 text-left transition-colors duration-150 hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-6 sm:px-6",
								"aria-expanded": open,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-9 shrink-0 items-center justify-center border border-border text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-micro tracking-[0.12em] text-signal",
										children: paper.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-sm font-medium text-fg sm:text-base",
										children: paper.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-micro text-dim",
										children: paper.pages
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-micro tabular-nums text-muted",
										children: paper.date
									})
								]
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border px-4 py-5 sm:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-sm leading-relaxed text-muted",
									children: paper.abstract
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-4",
									onClick: () => toast("Document queued", { description: `${paper.id} is available under NDA.` }),
									children: "Request under NDA"
								})]
							}) : null]
						}, paper.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "press",
			className: "scroll-mt-28 border-t border-border py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl",
						children: "Press releases"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
						children: "Unclassified statements. Program details stay on a cleared line."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-col gap-3",
						children: PRESS.map((item) => {
							const open = openPress === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border border-border bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpenPress(open ? null : item.id),
									className: "flex w-full flex-col gap-2 px-5 py-5 text-left sm:px-6",
									"aria-expanded": open,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-micro tabular-nums tracking-[0.14em] text-dim",
											children: item.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-semibold tracking-[-0.02em] text-fg",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm leading-relaxed text-muted",
											children: item.dek
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("grid transition-[grid-template-rows] duration-200 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "border-t border-border px-5 py-5 text-sm leading-relaxed text-muted sm:px-6",
											children: item.body
										})
									})
								})]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .08,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm text-muted",
							children: "Media inquiries go through the same cleared channel as program work."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "outline",
							onClick: goContact,
							children: "Media desk"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { InsightsPage as component };
