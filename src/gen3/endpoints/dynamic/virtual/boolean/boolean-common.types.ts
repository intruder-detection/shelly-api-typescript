interface BooleanComponentConfig {
  id: number;
  name: string | null;
  persisted: boolean;
  default_value: boolean;
  meta: {
    ui: UIProperties;
  };
}

interface UIProperties {
  view: '' | 'toggle' | 'label';
  icon: string | null;
  titles: [string, string] | null;
  buttonIcons: [string, string] | null;
}
