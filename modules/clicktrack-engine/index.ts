// Reexport the native module. On web, it will be resolved to ClicktrackEngineModule.web.ts
// and on native platforms to ClicktrackEngineModule.ts
export * from "./src/ClicktrackEngine.types";
export { default } from "./src/ClicktrackEngineModule";
