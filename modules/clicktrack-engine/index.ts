// Reexport the native module. On web, it will be resolved to ClicktrackEngineModule.web.ts
// and on native platforms to ClicktrackEngineModule.ts
export { default } from './src/ClicktrackEngineModule';
export { default as ClicktrackEngineView } from './src/ClicktrackEngineView';
export * from  './src/ClicktrackEngine.types';
