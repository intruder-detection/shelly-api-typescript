export interface EthernetConfiguration {
  enable: boolean;
  ipv4mode: 'dhcp' | 'static';
  ip: string | null;
  netmask: string | null;
  gw: string | null;
  nameserver: string | null;
}
