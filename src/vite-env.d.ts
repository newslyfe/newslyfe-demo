/// <reference types="vite/client" />

// Ensures timer types are compatible between Node.js and browser environments.
declare global {
  interface Window {
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: unknown[]): number;
    clearInterval(id?: number): void;
  }
}

// Treat this file as a module.
export {};
