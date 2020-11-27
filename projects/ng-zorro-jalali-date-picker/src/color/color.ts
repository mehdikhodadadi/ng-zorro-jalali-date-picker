 

import { NzSafeAny } from '../types';

export const presetColors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
] as const;

export type NzPresetColor = typeof presetColors[number];

export function isPresetColor(color: string): color is NzPresetColor {
  return presetColors.indexOf(color as NzSafeAny) !== -1;
}

// export const presetStatusColors = ['success', 'processing', 'error', 'default', 'warning'];

// export type NzPresetStatusColor = typeof presetStatusColors[number];

// export function isPresetStatusColor(color: string): color is NzPresetStatusColor {
//   return presetStatusColors.indexOf(color as NzSafeAny) !== -1;
// }
