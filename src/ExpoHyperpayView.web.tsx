import * as React from 'react';

import { ExpoHyperpayViewProps } from './ExpoHyperpay.types';

export default function ExpoHyperpayView(props: ExpoHyperpayViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
