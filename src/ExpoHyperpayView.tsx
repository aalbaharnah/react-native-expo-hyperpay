import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoHyperpayViewProps } from './ExpoHyperpay.types';

const NativeView: React.ComponentType<ExpoHyperpayViewProps> =
  requireNativeViewManager('ExpoHyperpay');

export default function ExpoHyperpayView(props: ExpoHyperpayViewProps) {
  return <NativeView {...props} />;
}
