import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";

const ProjectMesh = ({ hover }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.4 * delta * (hover ? 3 : 1);
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.15;
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1.8, 1.1, 0.3]} />
      <meshStandardMaterial color={hover ? "#6EE7B7" : "#7C3AED"} roughness={0.2} metalness={0.6} />
    </mesh>
  );
};

const InteractiveCard = ({ project }) => {
  const [hover, setHover] = useState(false);
  const containerRef = useRef();

  const onHoverStart = () => {
    setHover(true);
    gsap.to(containerRef.current, { scale: 1.03, duration: 0.35, ease: "power3.out" });
  };

  const onHoverEnd = () => {
    setHover(false);
    gsap.to(containerRef.current, { scale: 1, duration: 0.5, ease: "power3.out" });
  };

  return (
    <motion.div
      ref={containerRef}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      style={{ perspective: 1200 }}
    >
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight intensity={0.8} position={[5, 5, 5]} />
          <SuspenseFallback />
          <ProjectMesh hover={hover} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Preload all />
        </Canvas>

        <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold text-[20px]"
          >
            {project.name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="text-secondary text-[13px] mt-2 max-h-[4rem] overflow-hidden"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <motion.span
              key={t.name}
              whileHover={{ y: -3 }}
              className={`text-[13px] ${t.color}`}
            >
              #{t.name}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="text-sm px-3 py-1 bg-white/10 rounded-md"
          >
            Live
          </button>
          <button
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="text-sm px-3 py-1 bg-white/10 rounded-md"
          >
            Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SuspenseFallback = () => null;

export default InteractiveCard;
