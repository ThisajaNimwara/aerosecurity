import { AdaptiveDpr, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";
import { palette } from "@/lib/palette";

function Satellite({ spinning }: { spinning: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!spinning || !group.current) return;
    const d = Math.min(delta, 0.1);
    group.current.rotation.y += d * 0.18;
    group.current.rotation.z = Math.sin(performance.now() * 0.00025) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[1.15, 0.72, 0.72]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.45} />
      </mesh>
      <mesh>
        <boxGeometry args={[1.15, 0.72, 0.72]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.9} />
      </mesh>

      <mesh position={[-1.95, 0, 0]}>
        <boxGeometry args={[2.35, 0.045, 1.2]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.75} />
      </mesh>
      <mesh position={[1.95, 0, 0]}>
        <boxGeometry args={[2.35, 0.045, 1.2]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.75} />
      </mesh>
      <mesh position={[-1.95, 0, 0]}>
        <boxGeometry args={[2.35, 0.02, 1.2]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.18} />
      </mesh>
      <mesh position={[1.95, 0, 0]}>
        <boxGeometry args={[2.35, 0.02, 1.2]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.18} />
      </mesh>

      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.05, 6]} />
        <meshBasicMaterial color={palette.signal} wireframe />
      </mesh>
      <mesh position={[0, 1.48, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
        <coneGeometry args={[0.48, 0.28, 16, 1, true]} />
        <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.85} />
      </mesh>

      <mesh position={[0, -0.78, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.85, 6]} />
        <meshBasicMaterial color={palette.signal} wireframe />
      </mesh>
      <mesh position={[0, -1.28, 0]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshBasicMaterial color={palette.primary} wireframe />
      </mesh>

      {([-0.22, 0.22] as const).map((x) => (
        <mesh key={x} position={[x, 0, 0.48]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.12, 0.22, 8]} />
          <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Drone({
  spinning,
  position,
  scale = 1,
}: {
  spinning: boolean;
  position: [number, number, number];
  scale?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!spinning || !group.current) return;
    const t = state.clock.elapsedTime + seed;
    group.current.rotation.y = t * 0.22;
    group.current.position.y = position[1] + Math.sin(t * 0.6) * 0.09;
  });

  const arms = [
    [0.62, 0, 0.62],
    [-0.62, 0, 0.62],
    [0.62, 0, -0.62],
    [-0.62, 0, -0.62],
  ] as const;

  return (
    <group ref={group} position={position} scale={scale}>
      {/* body */}
      <mesh>
        <boxGeometry args={[0.34, 0.12, 0.5]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.4} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.34, 0.12, 0.5]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.85} />
      </mesh>
      {/* sensor pod */}
      <mesh position={[0, -0.1, 0.28]}>
        <sphereGeometry args={[0.08, 8, 6]} />
        <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.85} />
      </mesh>
      {/* arms + rotors */}
      {arms.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh position={[-x / 2, 0, -z / 2]} rotation={[0, Math.atan2(x, z), 0]}>
            <cylinderGeometry args={[0.015, 0.015, Math.hypot(x, z), 5]} />
            <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.7} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.14, 0.006, 6, 20]} />
            <meshBasicMaterial color={palette.primary} transparent opacity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function MilitaryUav({
  spinning,
  position,
  scale = 1,
}: {
  spinning: boolean;
  position: [number, number, number];
  scale?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!spinning || !group.current) return;
    const t = state.clock.elapsedTime + seed;
    group.current.position.x = position[0] + Math.sin(t * 0.09) * 0.4;
    group.current.position.z = position[2] + Math.cos(t * 0.09) * 0.4;
    group.current.rotation.y = -t * 0.09 + Math.PI / 2;
    group.current.rotation.z = Math.sin(t * 0.4) * 0.05;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.09, 1.35, 8]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.09, 1.35, 8]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.85} />
      </mesh>
      {/* flying wing */}
      <mesh position={[-0.05, 0, 0]}>
        <coneGeometry args={[0.95, 0.16, 3, 1, true]} />
        <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.7} />
      </mesh>
      {/* tail fins */}
      <mesh position={[0.58, 0.08, 0.16]} rotation={[0.3, 0, 0.15]}>
        <boxGeometry args={[0.02, 0.16, 0.18]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.58, 0.08, -0.16]} rotation={[-0.3, 0, -0.15]}>
        <boxGeometry args={[0.02, 0.16, 0.18]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function OrbitalRings({ spinning }: { spinning: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!spinning || !ref.current) return;
    ref.current.rotation.y -= Math.min(delta, 0.1) * 0.08;
    ref.current.rotation.x += Math.min(delta, 0.1) * 0.02;
  });
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2.6, 0.4, 0.2]}>
        <torusGeometry args={[2.35, 0.006, 8, 96]} />
        <meshBasicMaterial color={palette.signal} transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.3, 0.5]}>
        <torusGeometry args={[3.1, 0.005, 8, 96]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function DataParticles({ count, spinning }: { count: number; spinning: boolean }) {
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const r = 0.35 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.45 + Math.random() * 1.15;
    }
    return { positions, speeds };
  }, [count]);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useEffect(() => () => geom.dispose(), [geom]);

  useFrame((_, delta) => {
    if (!spinning) return;
    const d = Math.min(delta, 0.1);
    const attr = geom.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      const ix = i * 3;
      const x = arr[ix] ?? 0;
      const y = arr[ix + 1] ?? 0;
      const z = arr[ix + 2] ?? 0;
      const len = Math.hypot(x, y, z) || 0.001;
      const s = ((speeds[i] ?? 1) * d) / len;
      arr[ix] = x + x * s;
      arr[ix + 1] = y + y * s;
      arr[ix + 2] = z + z * s;
      if (len > 6.2) {
        const r = 0.28 + Math.random() * 0.4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        arr[ix] = r * Math.sin(phi) * Math.cos(theta);
        arr[ix + 1] = r * Math.sin(phi) * Math.sin(theta);
        arr[ix + 2] = r * Math.cos(phi);
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points geometry={geom}>
      <pointsMaterial
        color={palette.signal}
        size={0.032}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function CameraRig({ spinning }: { spinning: boolean }) {
  useFrame((state) => {
    if (!spinning) return;
    const t = state.clock.elapsedTime;
    state.camera.position.x = 2.6 + Math.sin(t * 0.12) * 0.28;
    state.camera.position.y = 1.05 + Math.cos(t * 0.09) * 0.12;
    state.camera.lookAt(0.9, 0.05, 0);
  });
  return null;
}

export function HeroScene() {
  const reduced = useReducedMotion() ?? false;
  const count =
    typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 300;

  return (
    <Canvas
      camera={{ position: [2.7, 1.1, 5.2], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <color attach="background" args={[palette.bg]} />
      <fog attach="fog" args={[palette.bg, 7, 16]} />
      <AdaptiveDpr />
      <Stars
        radius={70}
        depth={28}
        count={reduced ? 200 : 900}
        factor={2.4}
        saturation={0}
        fade
        speed={reduced ? 0 : 0.35}
      />
      <group position={[1.05, 0.08, 0]}>
        <Satellite spinning={!reduced} />
        <OrbitalRings spinning={!reduced} />
        <DataParticles count={count} spinning={!reduced} />
      </group>
      <Drone spinning={!reduced} position={[-1.55, -0.55, 1.2]} scale={1.15} />
      <MilitaryUav spinning={!reduced} position={[3.6, 1.35, -1.4]} scale={1.3} />
      <gridHelper args={[18, 18, palette.border, palette.surface]} position={[0, -2.15, 0]} />
      <CameraRig spinning={!reduced} />
    </Canvas>
  );
}
