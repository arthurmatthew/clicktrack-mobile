import { requireNativeView } from 'expo';
import * as React from 'react';

import { ClicktrackEngineViewProps } from './ClicktrackEngine.types';

const NativeView: React.ComponentType<ClicktrackEngineViewProps> =
  requireNativeView('ClicktrackEngine');

export default function ClicktrackEngineView(props: ClicktrackEngineViewProps) {
  return <NativeView {...props} />;
}
