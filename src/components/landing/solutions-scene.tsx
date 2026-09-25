import { AdaptiveDpr, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";
import { palette } from "@/lib/palette";

function Quadcopter({
  position,
  scale = 1,
  spinning,
}: {
  position: [number, number, number];
  scale?: number;
  spinning: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const rotors = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.1);
    if (!spinning || !group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = position[1] + Math.sin(t * 0.9) * 0.08;
    group.current.rotation.y += d * 0.15;
    group.current.rotation.z = Math.sin(t * 0.5) * 0.04;
    for (const rotor of rotors.current) {
      rotor.rotation.y += d * 14;
    }
  });

  const arms = [
    [0.55, 0, 0.55],
    [-0.55, 0, 0.55],
    [0.55, 0, -0.55],
    [-0.55, 0, -0.55],
  ] as const;

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[0.42, 0.11, 0.62]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.5} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.42, 0.11, 0.62]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.95} />
      </mesh>
      <mesh position={[0, -0.12, 0.22]}>
        <sphereGeometry args={[0.09, 8, 6]} />
        <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.9} />
      </mesh>
      {arms.map(([x, , z], i) => (
        <group key={i} position={[x, 0.04, z]}>
          <mesh>
            <boxGeometry args={[0.04, 0.03, Math.hypot(x, z)]} />
            <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.7} />
          </mesh>
          <group
            ref={(node) => {
              if (node) rotors.current[i] = node;
            }}
          >
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.16, 0.008, 6, 24]} />
              <meshBasicMaterial color={palette.primary} transparent opacity={0.7} />
            </mesh>
            <mesh>
              <boxGeometry args={[0.3, 0.01, 0.03]} />
              <meshBasicMaterial color={palette.signal} transparent opacity={0.55} />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

function FlyingWing({
  position,
  scale = 1,
  spinning,
}: {
  position: [number, number, number];
  scale?: number;
  spinning: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!spinning || !group.current) return;
    const d = Math.min(delta, 0.1);
    const t = state.clock.elapsedTime;
    group.current.rotation.y += d * 0.08;
    group.current.rotation.z = Math.sin(t * 0.35) * 0.06;
    group.current.position.y = position[1] + Math.sin(t * 0.4) * 0.05;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.13, 1.7, 8]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.13, 1.7, 8]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.9} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-0.05, 0, 0]}>
        <coneGeometry args={[1.15, 0.18, 3, 1, true]} />
        <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.75} />
      </mesh>
      <mesh position={[0.72, 0.12, 0.2]} rotation={[0.35, 0, 0.12]}>
        <boxGeometry args={[0.03, 0.22, 0.22]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.8} />
      </mesh>
      <mesh position={[0.72, 0.12, -0.2]} rotation={[-0.35, 0, -0.12]}>
        <boxGeometry args={[0.03, 0.22, 0.22]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.8} />
      </mesh>
      <mesh position={[-0.7, 0, 0]}>
        <octahedronGeometry args={[0.1, 0]} />
        <meshBasicMaterial color={palette.primary} wireframe />
      </mesh>
    </group>
  );
}

function Satellite({
  position,
  scale = 1,
  spinning,
}: {
  position: [number, number, number];
  scale?: number;
  spinning: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!spinning || !group.current) return;
    const d = Math.min(delta, 0.1);
    group.current.rotation.y += d * 0.22;
    group.current.rotation.z = Math.sin(performance.now() * 0.0003) * 0.08;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[0.7, 0.45, 0.45]} />
        <meshBasicMaterial color={palette.surface} transparent opacity={0.45} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.7, 0.45, 0.45]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.95} />
      </mesh>
      <mesh position={[-1.15, 0, 0]}>
        <boxGeometry args={[1.4, 0.03, 0.72]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.75} />
      </mesh>
      <mesh position={[1.15, 0, 0]}>
        <boxGeometry args={[1.4, 0.03, 0.72]} />
        <meshBasicMaterial color={palette.signal} wireframe transparent opacity={0.75} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7, 6]} />
        <meshBasicMaterial color={palette.primary} wireframe />
      </mesh>
    </group>
  );
}

function Hangar() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[9.2, 4.6, 7.4]} />
        <meshBasicMaterial color={palette.border} wireframe transparent opacity={0.22} />
      </mesh>
      <gridHelper args={[10, 20, palette.border, palette.surface]} position={[0, -2.25, 0]} />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2.24, 0]}>
        <ringGeometry args={[2.4, 2.42, 64]} />
        <meshBasicMaterial color={palette.signal} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function ScanPlane({ spinning }: { spinning: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!spinning || !ref.current) return;
    const t = (Math.sin(state.clock.elapsedTime * 0.55) + 1) / 2;
    ref.current.position.x = -3.2 + t * 6.4;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[0.012, 4.2, 6.8]} />
      <meshBasicMaterial color={palette.signal} transparent opacity={0.18} />
    </mesh>
  );
}

function PointCloud({ count, spinning }: { count: number; spinning: boolean }) {
  const { positions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 8.4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6.6;
    }
    return { positions };
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
      const iy = i * 3 + 1;
      arr[iy] = (arr[iy] ?? 0) + Math.sin(i + performance.now() * 0.0004) * d * 0.08;
    }
    attr.needsUpdate = true;
  });

  return (
    <points geometry={geom}>
      <pointsMaterial
        color={palette.signal}
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

export function SolutionsScene() {
  const reduced = useReducedMotion() ?? false;
  const count =
    typeof window !== "undefined" && window.innerWidth < 768 ? 220 : 520;

  return (
    <Canvas
      camera={{ position: [4.6, 1.8, 6.4], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={[palette.bg]} />
      <fog attach="fog" args={[palette.bg, 8, 18]} />
      <AdaptiveDpr />
      <Stars
        radius={60}
        depth={24}
        count={reduced ? 120 : 500}
        factor={2.2}
        saturation={0}
        fade
        speed={reduced ? 0 : 0.25}
      />
      <Hangar />
      <ScanPlane spinning={!reduced} />
      <PointCloud count={count} spinning={!reduced} />
      <FlyingWing spinning={!reduced} position={[0.15, 0.05, 0.2]} scale={1.35} />
      <Quadcopter spinning={!reduced} position={[-2.15, -0.35, 1.45]} scale={1.05} />
      <Satellite spinning={!reduced} position={[2.4, 1.35, -1.2]} scale={0.85} />
      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={4.2}
        maxDistance={11}
        maxPolarAngle={Math.PI / 1.7}
        autoRotate={!reduced}
        autoRotateSpeed={0.35}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
