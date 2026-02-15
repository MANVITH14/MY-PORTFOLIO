import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ticofab = () => {
  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <pointLight intensity={0.8} />
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const TicofabCanvas = () => {
  return (
    <Canvas
      shadows={false}
      dpr={1}
      camera={{ position: [4, 4, 4], fov: 45 }}
      gl={{
        antialias: false,
        powerPreference: "low-power"
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate={false}
        />
        <Ticofab />
      </Suspense>
    </Canvas>
  );
};

export default TicofabCanvas;
