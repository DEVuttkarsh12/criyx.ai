declare module "vanta/dist/vanta.fog.min" {
  import type * as THREE from "three";

  type VantaFogOptions = {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  };

  type VantaFogEffect = {
    destroy: () => void;
  };

  export default function FOG(options: VantaFogOptions): VantaFogEffect;
}
