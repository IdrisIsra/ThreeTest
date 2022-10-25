import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { AnimatedModel } from "./AnimatedModel";
import "./index.css";

function App() {
  return (
    <div id="canvas-container" style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model position={[-1, -1, 0]} />
          <AnimatedModel position={[1, -1, 0]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
