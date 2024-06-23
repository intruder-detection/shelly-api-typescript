import { BooleanMethods, VirtualMethods } from '@gen3/methods.enum';
import { VirtualDeleteBody, VirtualDeleteResponse } from '@gen3/endpoints/dynamic/virtual/virtual-delete.types';
import { VirtualAddBody, VirtualAddResponse } from '@gen3/endpoints/dynamic/virtual/virtual-add.types';
import { BooleanSetConfigBody, BooleanSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-set-config.types';
import { BooleanGetConfigBody, BooleanGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-get-config.types';
import { BooleanGetStatusBody, BooleanGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-get-status.types';
import { BooleanSetBody, BooleanSetResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-set.types';

export interface VirtualComponentMethodsMapping {
  [VirtualMethods.Add]: {
    body: VirtualAddBody;
    response: VirtualAddResponse;
  };
  [VirtualMethods.Delete]: {
    body: VirtualDeleteBody;
    response: VirtualDeleteResponse;
  };
}

export interface BooleanMethodsMapping {
  [BooleanMethods.GetConfig]: {
    body: BooleanGetConfigBody;
    response: BooleanGetConfigResponse;
  };
  [BooleanMethods.GetStatus]: {
    body: BooleanGetStatusBody;
    response: BooleanGetStatusResponse;
  };
  [BooleanMethods.SetConfig]: {
    body: BooleanSetConfigBody;
    response: BooleanSetConfigResponse;
  };
  [BooleanMethods.Set]: {
    body: BooleanSetBody;
    response: BooleanSetResponse;
  };
}

export interface ShellyGen3HTTPAPIMapping extends VirtualComponentMethodsMapping, BooleanMethodsMapping {}
