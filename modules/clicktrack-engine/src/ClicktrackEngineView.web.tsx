import * as React from 'react';

import { ClicktrackEngineViewProps } from './ClicktrackEngine.types';

export default function ClicktrackEngineView(props: ClicktrackEngineViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
