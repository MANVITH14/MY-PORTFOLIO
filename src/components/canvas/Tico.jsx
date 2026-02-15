import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ticofab = ({ isMobile }) => {
  const tico = useGLTF("./astro/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} />

      <primitive
        object={tico.scene}
        scale={isMobile ? [1, 1, 1] : [1.4, 1.4, 1.4]}   // ✅ FIXED SCALE
        position={isMobile ? [0, -2.5, 0] : [0, -3, -1]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const TicofabCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows={false}                 // ✅ DISABLED SHADOWS
      dpr={1}                         // ✅ SAFE DPR
      camera={{ position: [18, 5, 5], fov: 25 }}
      gl={{ antialias: false }}       // ✅ REMOVED preserveDrawingBuffer
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ticofab isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TicofabCanvas;
