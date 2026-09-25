import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Menu, t as X } from "../_libs/lucide-react.mjs";
import { o as NAV, r as COMPLIANCE, s as NAV_OVERLAY } from "./router-BIQwfv61.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as DialogOverlay, c as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-BenA13yG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.16em] tactical-hit transition-[color,background-color,border-color,transform,box-shadow,opacity,letter-spacing,text-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-3.5", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-transparent text-fg hover:border-signal hover:bg-signal hover:text-bg",
			ghost: "text-muted hover:bg-surface hover:text-fg",
			signal: "bg-signal text-bg hover:bg-signal/90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-micro",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function formatZulu(date) {
	return `${String(date.getUTCHours()).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}:${String(date.getUTCSeconds()).padStart(2, "0")} Z`;
}
function ZuluClock({ className }) {
	const [label, setLabel] = (0, import_react.useState)("00:00:00 Z");
	(0, import_react.useEffect)(() => {
		const tick = () => setLabel(formatZulu(/* @__PURE__ */ new Date()));
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
		dateTime: label,
		className,
		children: label
	});
}
function NavOverlay({ open, onClose, onNavigate }) {
	const reduced = useReducedMotion() ?? false;
	const closeRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		closeRef.current?.focus();
		function onKey(e) {
			if (e.key === "Escape") onClose();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: panelRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Site navigation",
		className: "fixed inset-0 z-[70] flex flex-col overflow-y-auto overscroll-contain bg-menu text-menu-fg",
		initial: reduced ? { opacity: 1 } : { opacity: 0 },
		animate: { opacity: 1 },
		exit: reduced ? { opacity: 1 } : { opacity: 0 },
		transition: {
			duration: reduced ? 0 : .26,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 z-10 flex items-start justify-end bg-menu px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-2 sm:px-10 sm:pt-8 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: closeRef,
				type: "button",
				onClick: onClose,
				"aria-label": "Close menu",
				className: "group flex min-h-11 items-center gap-2.5 py-2 text-menu-fg transition-opacity duration-150 hover:opacity-55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "font-sans text-xl font-semibold leading-none tracking-tight sm:text-2xl",
					children: "X"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-sm font-semibold uppercase tracking-[0.32em] sm:text-base",
					children: "Close"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-1 flex-col px-6 pt-6 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-10 sm:pt-4 sm:pb-16 lg:px-16 lg:pt-6",
			"aria-label": "Full site navigation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-10 sm:gap-12 lg:gap-14",
				children: NAV_OVERLAY.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: reduced ? 0 : .4,
						delay: reduced ? 0 : .04 + i * .045,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onNavigate(item.href),
						className: "group block min-h-11 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-baseline gap-x-1 font-sans text-[clamp(2.35rem,8.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-menu-fg transition-opacity duration-150 group-hover:opacity-55",
								children: [item.label, item.subs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
									"aria-hidden": "true",
									className: "relative -top-2 ml-0.5 align-super font-sans text-[0.38em] font-medium tracking-normal text-menu-fg/45 sm:-top-3",
									children: item.subs.length
								}) : null]
							}),
							item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 block font-sans text-sm font-normal tracking-[-0.01em] text-menu-muted sm:text-base lg:text-lg",
								children: [
									"(",
									item.note,
									")"
								]
							}) : null,
							item.subs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: `(${item.subs.length} sub-items)`
							}) : null
						]
					}), item.subs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col gap-3.5 pl-0 sm:mt-6 sm:gap-4 sm:pl-1 lg:mt-7",
						children: item.subs.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onNavigate(sub.href),
							className: "group flex min-h-11 w-full items-start gap-3 py-0.5 text-left font-sans text-[0.95rem] leading-relaxed font-normal text-menu-muted hover:text-menu-fg sm:gap-3.5 sm:text-lg lg:text-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-0.5 shrink-0 text-menu-muted/70 transition-colors duration-150 group-hover:text-primary sm:mt-1",
								children: "↳"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-pretty",
								children: sub.label
							})]
						}) }, sub.label))
					}) : null]
				}) }, item.id))
			})
		})]
	}, "nav-overlay") : null });
}
var LEVELS = [
	{
		id: "Normal",
		tone: "text-signal",
		dot: "bg-signal text-signal"
	},
	{
		id: "Medium",
		tone: "text-warn",
		dot: "bg-warn text-warn"
	},
	{
		id: "High",
		tone: "text-primary",
		dot: "bg-primary text-primary"
	},
	{
		id: "Escalated",
		tone: "text-primary",
		dot: "bg-primary text-primary"
	},
	{
		id: "Aborted",
		tone: "text-dim",
		dot: "bg-dim text-dim"
	}
];
function SystemStatus({ compact = false }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let timer = 0;
		const tick = () => {
			const wait = reduced ? 1e4 : 5e3 + Math.floor(Math.random() * 5e3);
			timer = window.setTimeout(() => {
				setIndex((n) => (n + 1) % LEVELS.length);
				tick();
			}, wait);
		};
		tick();
		return () => window.clearTimeout(timer);
	}, []);
	const level = LEVELS[index] ?? LEVELS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hidden items-center gap-2 border border-border bg-surface/80 px-2.5 py-1.5 md:flex",
		"aria-live": "polite",
		title: "Simulated tactical status feed",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("pulse-dot size-1.5 rounded-full", level.dot) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-micro uppercase tracking-[0.16em] text-muted",
			children: [
				compact ? "Status" : "System Status",
				":",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("tabular-nums", level.tone),
					children: level.id
				})
			]
		})]
	});
}
function useGoContact() {
	const navigate = useNavigate();
	return (0, import_react.useCallback)(() => {
		navigate({ to: "/contact" });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [navigate]);
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const goContact = useGoContact();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	async function go(href) {
		setOpen(false);
		const [path, hash] = href.split("#");
		await navigate({
			to: path || "/",
			hash: hash || void 0
		});
		if (hash) window.setTimeout(() => {
			document.getElementById(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 80);
		else window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-200", scrolled && !open ? "border-border bg-bg/75 backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "tactical-hit font-mono text-xs tracking-[0.08em] text-fg sm:text-sm",
					onClick: (e) => {
						e.preventDefault();
						go("/");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-signal",
							children: "<"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "aerosecurity.space"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "aero"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-signal",
							children: "/>"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.filter((item) => item.id !== "contact").map((item) => {
						const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							onClick: (e) => {
								e.preventDefault();
								go(item.href);
							},
							className: cn("group relative flex h-11 items-center px-3 font-mono text-2xs uppercase tracking-[0.18em] transition-colors duration-150", isActive ? "text-fg" : "text-muted hover:bg-signal hover:text-bg"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mr-1 text-signal transition-opacity duration-150 group-hover:text-bg", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"),
									children: "["
								}),
								item.label,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("ml-1 text-signal transition-opacity duration-150 group-hover:text-bg", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"),
									children: "]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-signal transition-opacity duration-150", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100") })
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemStatus, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-mono text-micro tabular-nums text-dim xl:inline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZuluClock, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "hidden sm:inline-flex",
							onClick: () => {
								setOpen(false);
								goContact();
							},
							children: "Request Clearance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavOverlay, {
			open,
			onClose: () => setOpen(false),
			onNavigate: go
		})]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full border border-border bg-bg px-3 font-mono text-sm text-fg", "placeholder:text-dim", "transition-[border-color,box-shadow] duration-150 ease-out", "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", "disabled:cursor-not-allowed disabled:opacity-40", className),
		...props
	});
}
var CONSUMER_DOMAINS = /* @__PURE__ */ new Set([
	"gmail.com",
	"googlemail.com",
	"yahoo.com",
	"yahoo.co.uk",
	"yahoo.co.in",
	"ymail.com",
	"rocketmail.com",
	"hotmail.com",
	"hotmail.co.uk",
	"outlook.com",
	"outlook.co.uk",
	"live.com",
	"msn.com",
	"aol.com",
	"icloud.com",
	"me.com",
	"mac.com",
	"protonmail.com",
	"proton.me",
	"pm.me",
	"gmx.com",
	"gmx.net",
	"zoho.com",
	"yandex.com",
	"yandex.ru",
	"mail.com",
	"inbox.com",
	"fastmail.com",
	"hushmail.com",
	"tutanota.com",
	"tuta.com",
	"mail.ru",
	"qq.com",
	"163.com",
	"126.com",
	"sina.com",
	"rediffmail.com",
	"lycos.com",
	"excite.com",
	"aim.com",
	"wow.com",
	"att.net",
	"sbcglobal.net",
	"comcast.net",
	"verizon.net",
	"bellsouth.net",
	"charter.net",
	"cox.net",
	"earthlink.net",
	"juno.com",
	"optonline.net",
	"sky.com",
	"btinternet.com",
	"yopmail.com",
	"guerrillamail.com",
	"tempmail.com",
	"10minutemail.com"
]);
var EMAIL_RE = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
function isWorkEmail(value) {
	const match = value.trim().toLowerCase().match(EMAIL_RE);
	if (!match?.[1]) return false;
	const domain = match[1];
	if (CONSUMER_DOMAINS.has(domain)) return false;
	const parts = domain.split(".");
	if (parts.length >= 3) {
		const parent = parts.slice(-2).join(".");
		if (CONSUMER_DOMAINS.has(parent)) return false;
	}
	return true;
}
var WORK_EMAIL_ERROR = "Use a work email. Personal providers (Gmail, Yahoo, Outlook, iCloud, and similar) are blocked.";
var COLUMNS = [
	{
		title: "Platform",
		links: [
			{
				label: "Overview",
				href: "/"
			},
			{
				label: "Solutions",
				href: "/solutions"
			},
			{
				label: "Insights",
				href: "/insights"
			},
			{
				label: "Documentation",
				href: "docs"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About",
				href: "/about"
			},
			{
				label: "Careers",
				href: "/about#careers"
			},
			{
				label: "Partnerships",
				href: "/about#investments"
			},
			{
				label: "Contact",
				href: "/contact"
			}
		]
	},
	{
		title: "Legal",
		links: [
			{
				label: "Privacy",
				href: "/privacy"
			},
			{
				label: "Terms",
				href: "/terms"
			},
			{
				label: "Export Control",
				href: "/export"
			}
		]
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	function onSubmit(e) {
		e.preventDefault();
		if (!isWorkEmail(email)) {
			setError(WORK_EMAIL_ERROR);
			toast.error("Work email required.", { description: WORK_EMAIL_ERROR });
			return;
		}
		setError(null);
		toast.success("Channel opened.", { description: "A specialist will respond on a secure path." });
		setEmail("");
	}
	async function onLink(href) {
		if (href === "docs") {
			toast("Controlled document", { description: "Full documentation is available under NDA / CUI handling." });
			return;
		}
		const [path, hash] = href.split("#");
		await navigate({
			to: path || "/",
			hash: hash || void 0
		});
		if (hash) window.setTimeout(() => {
			document.getElementById(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 80);
		else window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl text-2xl font-semibold tracking-[-0.03em] text-fg sm:text-3xl",
						children: "Secure your most critical assets today."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "flex w-full max-w-[400px] shrink-0 flex-col gap-2 lg:ml-auto",
						noValidate: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full max-w-[400px] flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									if (error) setError(null);
								},
								placeholder: "[ WORK EMAIL ]",
								"aria-label": "Work email",
								"aria-invalid": error ? true : void 0,
								className: "w-full max-w-[400px] placeholder:uppercase placeholder:tracking-[0.08em]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "shrink-0",
								children: "Initiate"
							})]
						}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-micro leading-relaxed text-primary",
							children: error
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-micro uppercase tracking-[0.12em] text-dim",
							children: "Official domain only · no Gmail / Yahoo"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-signal",
								children: "<"
							}),
							" aerosecurity.space",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-signal",
								children: "/>"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
						children: "Dual-use cybersecurity for commercial LEO constellations and defense unmanned systems. R&D in Colombo, Sri Lanka. Corporate entity in the United States."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: COMPLIANCE.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border border-border px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-dim",
							children: badge
						}, badge))
					})
				] }), COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-micro uppercase tracking-[0.18em] text-muted",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onLink(link.href),
						className: "tactical-hit text-sm text-fg/80 hover:text-signal",
						children: link.label
					}) }, link.label))
				})] }, col.title))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-micro uppercase tracking-[0.14em] text-dim",
						children: "© 2026 aerosecurity.space"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-micro uppercase tracking-[0.14em] text-dim",
						children: "Unclassified marketing surface"
					})]
				})
			})
		]
	});
}
var useUi = create((set) => ({
	docsOpen: false,
	setDocsOpen: (docsOpen) => set({ docsOpen })
}));
var SNIPPET = `{
  "enclave": "cemp",
  "fleet": "uav-indo-7",
  "patchWindow": "pre-flight",
  "policy": {
    "edr": "inline",
    "isl": "zero-trust",
    "rfDpi": true
  }
}`;
function DocsSheet() {
	const open = useUi((s) => s.docsOpen);
	const setOpen = useUi((s) => s.setDocsOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-border bg-bg shadow-[var(--shadow-card)] focus:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-mono text-xs uppercase tracking-[0.18em] text-fg",
					children: "Platform documentation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 font-mono text-micro text-dim",
					children: "AEROSECURITY PLATFORM · v4.2.1 · UNCLASSIFIED"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Close documentation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-micro uppercase tracking-[0.16em] text-signal",
						children: "GET /v1/fleet/policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Retrieve the active CEMP policy for a fleet enclave. Authorization requires a clearance-bound bearer token rotated every 15 minutes via the ground HSM."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-5 overflow-x-auto border border-border bg-surface p-4 font-mono text-2xs leading-6 text-signal",
						children: `Authorization: Bearer <clearance-token>
X-Aero-Enclave: cemp
X-Aero-Class: CUI`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 overflow-x-auto border border-border bg-surface p-4 font-mono text-2xs leading-6 text-fg/90",
						children: SNIPPET
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-8 font-mono text-micro uppercase tracking-[0.16em] text-signal",
						children: "Agent install · RTOS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "The EDR agent is a single C99 compilation unit targeting NASA cFS, VxWorks 7, and RTEMS 6. Worst-case execution stays inside the allotted telemetry minor frame."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-2 font-mono text-2xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "01  ·  Link libaero_edr.a into the flight image" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "02  ·  Register the watchdog on the 1553 / SpaceWire bus" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "03  ·  Seal the binary with the pre-flight hardening pipeline" })
						]
					})
				]
			})]
		})] })
	});
}
function PageShell({ children }) {
	const hash = useRouterState({ select: (s) => s.location.hash });
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const id = hash.replace(/^#/, "");
		if (!id) return;
		const t = window.setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 60);
		return () => window.clearTimeout(t);
	}, [hash, pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main-content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-xs focus:text-fg",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main-content",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsSheet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "bottom-right",
			toastOptions: { classNames: { toast: "font-mono text-xs border-border bg-surface text-fg rounded-sm" } }
		})
	] });
}
function SectionLabel({ index, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-2xs text-signal",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-2xs uppercase tracking-[0.22em] text-muted",
				children: label
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .18
		},
		transition: {
			duration: .5,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Stagger({ children, className, delay = .05 }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .12
		},
		variants: {
			hidden: {},
			visible: { transition: {
				staggerChildren: reduced ? 0 : .08,
				delayChildren: delay
			} }
		},
		children
	});
}
function StaggerItem({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		variants: {
			hidden: {
				opacity: 0,
				y: 20
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .45,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}
		},
		children
	});
}
//#endregion
export { Stagger as a, cn as c, SectionLabel as i, useGoContact as l, PageShell as n, StaggerItem as o, Reveal as r, ZuluClock as s, Button as t, useUi as u };
