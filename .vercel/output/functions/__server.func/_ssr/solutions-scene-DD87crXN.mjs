import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as useFrame, i as Canvas, n as Stars, o as BufferAttribute, r as OrbitControls, s as BufferGeometry, t as AdaptiveDpr } from "../_libs/@react-three/drei+[...].mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as palette } from "./corner-frame-CBIp9iMg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-scene-DD87crXN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Quadcopter({ position, scale = 1, spinning }) {
	const group = (0, import_react.useRef)(null);
	const rotors = (0, import_react.useRef)([]);
	useFrame((state, delta) => {
		const d = Math.min(delta, .1);
		if (!spinning || !group.current) return;
		const t = state.clock.elapsedTime;
		group.current.position.y = position[1] + Math.sin(t * .9) * .08;
		group.current.rotation.y += d * .15;
		group.current.rotation.z = Math.sin(t * .5) * .04;
		for (const rotor of rotors.current) rotor.rotation.y += d * 14;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				.11,
				.62
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: palette.surface,
				transparent: true,
				opacity: .5
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				.11,
				.62
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: palette.signal,
				wireframe: true,
				transparent: true,
				opacity: .95
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.12,
					.22
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.09,
					8,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.primary,
					wireframe: true,
					transparent: true,
					opacity: .9
				})]
			}),
			[
				[
					.55,
					0,
					.55
				],
				[
					-.55,
					0,
					.55
				],
				[
					.55,
					0,
					-.55
				],
				[
					-.55,
					0,
					-.55
				]
			].map(([x, , z], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					x,
					.04,
					z
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.04,
					.03,
					Math.hypot(x, z)
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .7
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: (node) => {
						if (node) rotors.current[i] = node;
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						rotation: [
							Math.PI / 2,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							.16,
							.008,
							6,
							24
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
							color: palette.primary,
							transparent: true,
							opacity: .7
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						.01,
						.03
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
						color: palette.signal,
						transparent: true,
						opacity: .55
					})] })]
				})]
			}, i))
		]
	});
}
function FlyingWing({ position, scale = 1, spinning }) {
	const group = (0, import_react.useRef)(null);
	useFrame((state, delta) => {
		if (!spinning || !group.current) return;
		const d = Math.min(delta, .1);
		const t = state.clock.elapsedTime;
		group.current.rotation.y += d * .08;
		group.current.rotation.z = Math.sin(t * .35) * .06;
		group.current.position.y = position[1] + Math.sin(t * .4) * .05;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.13,
					1.7,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.surface,
					transparent: true,
					opacity: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.13,
					1.7,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					Math.PI / 2
				],
				position: [
					-.05,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					1.15,
					.18,
					3,
					1,
					true
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.primary,
					wireframe: true,
					transparent: true,
					opacity: .75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.72,
					.12,
					.2
				],
				rotation: [
					.35,
					0,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.03,
					.22,
					.22
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .8
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.72,
					.12,
					-.2
				],
				rotation: [
					-.35,
					0,
					-.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.03,
					.22,
					.22
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .8
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.7,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.1, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.primary,
					wireframe: true
				})]
			})
		]
	});
}
function Satellite({ position, scale = 1, spinning }) {
	const group = (0, import_react.useRef)(null);
	useFrame((_, delta) => {
		if (!spinning || !group.current) return;
		const d = Math.min(delta, .1);
		group.current.rotation.y += d * .22;
		group.current.rotation.z = Math.sin(performance.now() * 3e-4) * .08;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.7,
				.45,
				.45
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: palette.surface,
				transparent: true,
				opacity: .45
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.7,
				.45,
				.45
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: palette.signal,
				wireframe: true,
				transparent: true,
				opacity: .95
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-1.15,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.4,
					.03,
					.72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					1.15,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.4,
					.03,
					.72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.signal,
					wireframe: true,
					transparent: true,
					opacity: .75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.55,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.02,
					.02,
					.7,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: palette.primary,
					wireframe: true
				})]
			})
		]
	});
}
function Hangar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			9.2,
			4.6,
			7.4
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: palette.border,
			wireframe: true,
			transparent: true,
			opacity: .22
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("gridHelper", {
			args: [
				10,
				20,
				palette.border,
				palette.surface
			],
			position: [
				0,
				-2.25,
				0
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				-2.24,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				2.4,
				2.42,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: palette.signal,
				transparent: true,
				opacity: .35
			})]
		})
	] });
}
function ScanPlane({ spinning }) {
	const ref = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!spinning || !ref.current) return;
		const t = (Math.sin(state.clock.elapsedTime * .55) + 1) / 2;
		ref.current.position.x = -3.2 + t * 6.4;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		position: [
			0,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.012,
			4.2,
			6.8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: palette.signal,
			transparent: true,
			opacity: .18
		})]
	});
}
function PointCloud({ count, spinning }) {
	const { positions } = (0, import_react.useMemo)(() => {
		const positions = new Float32Array(count * 3);
		for (let i = 0; i < count; i += 1) {
			positions[i * 3] = (Math.random() - .5) * 8.4;
			positions[i * 3 + 1] = (Math.random() - .5) * 4.2;
			positions[i * 3 + 2] = (Math.random() - .5) * 6.6;
		}
		return { positions };
	}, [count]);
	const geom = (0, import_react.useMemo)(() => {
		const g = new BufferGeometry();
		g.setAttribute("position", new BufferAttribute(positions, 3));
		return g;
	}, [positions]);
	(0, import_react.useEffect)(() => () => geom.dispose(), [geom]);
	useFrame((_, delta) => {
		if (!spinning) return;
		const d = Math.min(delta, .1);
		const attr = geom.getAttribute("position");
		const arr = attr.array;
		for (let i = 0; i < count; i += 1) {
			const iy = i * 3 + 1;
			arr[iy] = (arr[iy] ?? 0) + Math.sin(i + performance.now() * 4e-4) * d * .08;
		}
		attr.needsUpdate = true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
		geometry: geom,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			color: palette.signal,
			size: .028,
			sizeAttenuation: true,
			transparent: true,
			opacity: .55,
			depthWrite: false
		})
	});
}
function SolutionsScene() {
	const reduced = useReducedMotion() ?? false;
	const count = typeof window !== "undefined" && window.innerWidth < 768 ? 220 : 520;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				4.6,
				1.8,
				6.4
			],
			fov: 38
		},
		dpr: [1, 1.5],
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: "high-performance"
		},
		frameloop: reduced ? "demand" : "always",
		style: {
			width: "100%",
			height: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: [palette.bg]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					palette.bg,
					8,
					18
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptiveDpr, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
				radius: 60,
				depth: 24,
				count: reduced ? 120 : 500,
				factor: 2.2,
				saturation: 0,
				fade: true,
				speed: reduced ? 0 : .25
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hangar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanPlane, { spinning: !reduced }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointCloud, {
				count,
				spinning: !reduced
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlyingWing, {
				spinning: !reduced,
				position: [
					.15,
					.05,
					.2
				],
				scale: 1.35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quadcopter, {
				spinning: !reduced,
				position: [
					-2.15,
					-.35,
					1.45
				],
				scale: 1.05
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Satellite, {
				spinning: !reduced,
				position: [
					2.4,
					1.35,
					-1.2
				],
				scale: .85
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: false,
				enableZoom: true,
				minDistance: 4.2,
				maxDistance: 11,
				maxPolarAngle: Math.PI / 1.7,
				autoRotate: !reduced,
				autoRotateSpeed: .35,
				enableDamping: true,
				dampingFactor: .08
			})
		]
	});
}
//#endregion
export { SolutionsScene };
