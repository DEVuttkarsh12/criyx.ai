"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function HeroGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#030201_0%,#170903_32%,#9A3B12_70%,#DA8C32_100%)]" />

      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: "-6%",
          left: "-6%",
          width: "112%",
          height: "112%",
          opacity: 0.94,
        }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          brightness={1.34}
          cAzimuthAngle={188}
          cDistance={3.6}
          cPolarAngle={88}
          cameraZoom={0.92}
          color1="#100804"
          color2="#E05A14"
          color3="#B86A1D"
          envPreset="city"
          grain="on"
          lightType="3d"
          positionX={-1.45}
          positionY={0.08}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.08}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.34}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_46%,rgba(215,137,44,0.24),transparent_30%),radial-gradient(circle_at_18%_24%,rgba(224,90,20,0.22),transparent_34%)]" />

      {/* readability overlays */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030201]/52 via-[#030201]/18 to-[#030201]/08" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030201]/8 to-[#030201]/58" />
      <div className="absolute inset-y-0 right-0 w-[28vw] bg-gradient-to-l from-[#030201]/28 via-transparent to-transparent" />
    </div>
  );
}
