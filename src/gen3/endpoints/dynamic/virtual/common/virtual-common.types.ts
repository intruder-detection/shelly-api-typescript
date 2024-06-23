export interface VirtualComponentConfig<T> extends VirtualMetaComponent {
  id: number;
  name: string | null;
  persisted: boolean;
  default_value: T;
}

export interface ButtonOrGroupVirtualComponentConfig extends VirtualMetaComponent {
  id: number;
  name: string | null;
}

interface VirtualMetaComponent {
  meta: {
    ui: MetaUIProperties;
  };
}

interface MetaUIProperties {
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
