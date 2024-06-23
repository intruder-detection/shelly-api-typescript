import { ShellyGen2HTTPAPIMapping } from '@gen2/endpoint-types.types';
import { ShellyGen3HTTPAPIMapping } from '@gen3/endpoint-types.types';

export interface Shelly2PlusMapping extends ShellyGen2HTTPAPIMapping, ShellyGen3HTTPAPIMapping {}
