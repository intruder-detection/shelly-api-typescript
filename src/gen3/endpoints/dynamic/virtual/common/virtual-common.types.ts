export interface VirtualComponentConfig<T> {
  id: number;
  name: string | null;
  persisted: boolean;
  default_value: T;
  meta: {
    ui: UIProperties;
  };
}

interface UIProperties {
  view: '' | 'toggle' | 'label' | 'dropdown' | 'field' | 'image' | 'slider' | 'progressbar';
  icon: string | null;
  titles?: [string, string] | null;
  buttonIcons?: [string, string] | null;
  images?: object;
  unit?: string;
  step?: number;
}

export interface VirtualSetValue<T> {
  value: T;
}

export interface GetStatusResponseResult<T> {
  source: string;
  value: T;
  last_update_ts: number;
}
