import { BaseIdType } from '@common/base-id.types';

export interface LightSetBody extends BaseIdType {
  on?: boolean; // True for light on, false otherwise. Optional
  brightness?: number; // Brightness level. Optional
  transition_duration?: number; // Transition time in seconds. Optional
  toggle_after?: number; // Flip-back timer in seconds. Optional
}
