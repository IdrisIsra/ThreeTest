import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Model } from "./../public/Model";
import "./index.css";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[0.1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-0.05, -0.15, 3.1]} />
    <Box position={[0.05, -0.15, 3.1]} />
    <Model position={[0, -1, 3]} />
  </Canvas>
);
