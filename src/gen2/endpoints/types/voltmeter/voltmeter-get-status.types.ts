import { BaseShellyResponse } from '@common/generic.types';
import { VoltmeterStatus } from '@gen2/endpoints/types/voltmeter/voltmeter-common.types';

export interface VoltmeterGetStatusResponse extends BaseShellyResponse<VoltmeterStatus> {}
