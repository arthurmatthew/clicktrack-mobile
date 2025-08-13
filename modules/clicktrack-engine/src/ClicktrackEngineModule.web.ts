import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './ClicktrackEngine.types';

type ClicktrackEngineModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class ClicktrackEngineModule extends NativeModule<ClicktrackEngineModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(ClicktrackEngineModule, 'ClicktrackEngineModule');
