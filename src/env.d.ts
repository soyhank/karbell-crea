/// <reference types="astro/client" />

interface Window {
  kcTrack: (event: string, params?: Record<string, unknown>) => void;
  kcWa: (text: string) => string;
}
