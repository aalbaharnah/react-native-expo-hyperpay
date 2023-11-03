import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoHyperpay.web.ts
// and on native platforms to ExpoHyperpay.ts
import ExpoHyperpayModule from './ExpoHyperpayModule';
import ExpoHyperpayView from './ExpoHyperpayView';
import { ChangeEventPayload, ExpoHyperpayViewProps } from './ExpoHyperpay.types';

// Get the native constant value.
export const PI = ExpoHyperpayModule.PI;

export function hello(): string {
  return ExpoHyperpayModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoHyperpayModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoHyperpayModule ?? NativeModulesProxy.ExpoHyperpay);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoHyperpayView, ExpoHyperpayViewProps, ChangeEventPayload };
