import * as THREE from "three";
import React, { createRef, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { AnimatedModel } from "./AnimatedModel";
import "./index.css";

function App() {
  const scrollArea = useRef<HTMLDivElement>(null);
  const topRef = useRef<number>(0);
  const onScroll = (e: any) => {
    topRef.current = e.target.scrollTop;
  };

  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <div id="canvas-container" style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model position={[-1, -1, 0]} />
          <AnimatedModel position={[1, -1, 0]} top={topRef} />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <div ref={scrollArea} onScroll={onScroll} className="scrollArea">
        <div style={{ height: `300vh` }} />
      </div>
    </div>
  );
}

export default App;
