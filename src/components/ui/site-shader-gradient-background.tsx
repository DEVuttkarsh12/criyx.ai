"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float time;
  uniform float uAmplitude;
  uniform float uDensity;
  uniform float uFrequency;
  uniform float uSpeed;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    float waveA = sin((pos.x * uFrequency + time * uSpeed) * uDensity);
    float waveB = cos((pos.y * (uFrequency * 0.75) - time * (uSpeed * 0.8)) * (uDensity * 0.85));

    pos.z += (waveA + waveB) * 0.08 * uAmplitude;
    pos.x += sin(pos.y * 1.8 + time * 0.12) * 0.04 * uAmplitude;
    pos.y += cos(pos.x * 1.6 - time * 0.1) * 0.03 * uAmplitude;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float brightness;
  uniform float grainStrength;
  uniform float uDensity;
  uniform float uFrequency;
  uniform float uStrength;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  varying vec2 vUv;
  varying vec3 vPosition;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;
    vec2 centered = uv - 0.5;

    float swirl = sin((uv.x * uFrequency + time * 0.2) * uDensity) *
      cos((uv.y * (uFrequency * 0.8) - time * 0.16) * (uDensity * 1.15));

    float folds = sin((centered.x + centered.y) * 8.0 + time * 0.15) * 0.25;
    float blend = clamp(0.5 + swirl * 0.48 + folds, 0.0, 1.0);

    vec3 base = mix(color2, color1, smoothstep(0.14, 0.92, uv.y + blend * 0.18));
    vec3 ember = mix(base, color3, smoothstep(0.12, 0.88, uv.x + blend * 0.22));

    float highlight = smoothstep(0.12, 0.88, 1.0 - length(centered * vec2(1.18, 0.9)));
    highlight += smoothstep(0.58, 1.0, blend) * 0.55;

    vec3 color = ember;
    color += color1 * highlight * 0.42;
    color += vec3(0.12, 0.02, 0.01) * uStrength * 0.045;

    float grain = (random(uv * 280.0 + time * 0.02) - 0.5) * grainStrength;
    color += grain;
    color *= brightness;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function GradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      brightness: { value: 1.2 },
      grainStrength: { value: 0.035 },
      uAmplitude: { value: 1 },
      uDensity: { value: 1.3 },
      uFrequency: { value: 5.5 },
      uSpeed: { value: 0.4 },
      uStrength: { value: 4 },
      color1: { value: new THREE.Color("#ffb980") },
      color2: { value: new THREE.Color("#090000") },
      color3: { value: new THREE.Color("#1c0000") },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) {
      return;
    }

    materialRef.current.uniforms.time.value = state.clock.elapsedTime;
  });

  return (
    <mesh rotation={[0, THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(50)]}>
      <planeGeometry args={[7.6, 7.6, 180, 180]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function SiteShaderGradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,185,128,0.14),transparent_24%),radial-gradient(circle_at_74%_22%,rgba(71,5,5,0.38),transparent_28%),radial-gradient(circle_at_52%_78%,rgba(28,0,0,0.44),transparent_30%),linear-gradient(180deg,#090000_0%,#140102_44%,#090000_100%)]" />
      <Canvas
        camera={{ position: [-1.4, 0, 3.6], fov: 45, zoom: 1 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        className="absolute inset-0 h-full w-full opacity-[0.96]"
      >
        <ambientLight intensity={0.3} />
        <GradientPlane />
      </Canvas>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,0,0,0.12),rgba(9,0,0,0.34))]" />
    </div>
  );
}
