import {
  BooleanMethods,
  BTHomeMethods,
  ButtonMethods,
  EnumMethods,
  GroupMethods,
  NumberMethods,
  TextMethods,
  VirtualMethods,
} from '@gen3/methods.enum';
import { VirtualDeleteBody, VirtualDeleteResponse } from '@gen3/endpoints/dynamic/virtual/virtual-delete.types';
import { VirtualAddBody, VirtualAddResponse } from '@gen3/endpoints/dynamic/virtual/virtual-add.types';
import { BooleanSetConfigBody, BooleanSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-set-config.types';
import { BooleanGetConfigBody, BooleanGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-get-config.types';
import { BooleanGetStatusBody, BooleanGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-get-status.types';
import { BooleanSetBody, BooleanSetResponse } from '@gen3/endpoints/dynamic/virtual/boolean/boolean-set.types';
import { NumberGetConfigBody, NumberGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/number/number-get-config.types';
import { NumberSetConfigBody, NumberSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/number/number-set-config.types';
import { NumberSetBody, NumberSetResponse } from '@gen3/endpoints/dynamic/virtual/number/number-set.types';
import { NumberGetStatusBody, NumberGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/number/number-get-status.types';
import { TextGetConfigBody, TextGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/text/text-get-config.types';
import { TextSetConfigBody, TextSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/text/text-set-config.types';
import { TextSetBody, TextSetResponse } from '@gen3/endpoints/dynamic/virtual/text/text-set.types';
import { TextGetStatusBody, TextGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/text/text-get-status.types';
import { EnumGetConfigBody, EnumGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/enum/enum-get-config.types';
import { EnumGetStatusBody, EnumGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/enum/enum-get-status.types';
import { EnumSetBody, EnumSetResponse } from '@gen3/endpoints/dynamic/virtual/enum/enum-set.types';
import { EnumSetConfigBody, EnumSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/enum/enum-set-config.types';
import { ButtonGetConfigBody, ButtonGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/button/button-get-config.types';
import { ButtonSetConfigBody, ButtonSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/button/button-set-config.types';
import { ButtonTriggerBody, ButtonTriggerResponse } from '@gen3/endpoints/dynamic/virtual/button/button-trigger.types';
import { GroupGetConfigBody, GroupGetConfigResponse } from '@gen3/endpoints/dynamic/virtual/group/group-get-config.types';
import { GroupGetStatusBody, GroupGetStatusResponse } from '@gen3/endpoints/dynamic/virtual/group/group-get-status.types';
import { GroupSetBody, GroupSetResponse } from '@gen3/endpoints/dynamic/virtual/group/group-set.types';
import { GroupSetConfigBody, GroupSetConfigResponse } from '@gen3/endpoints/dynamic/virtual/group/group-set-config.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { BTHomeGetStatusResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-get-status.types';
import { BTHomeAddDeviceBody, BTHomeAddDeviceResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-add-device.types';
import { BTHomeDeleteDeviceBody, BTHomeDeleteDeviceResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-delete-device.types';
import { BTHomeDeleteSensorBody, BTHomeDeleteSensorResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-delete-sensor.types';
import { BTHomeAddSensorBody, BTHomeAddSensorResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-add-sensor.types';
import {
  BTHomeStartDeviceDiscoveryBody,
  BTHomeStartDeviceDiscoveryResponse,
} from '@gen3/endpoints/dynamic/bthome/bthome/bthome-start-device-discovery.types';
import { BTHomeGetObjectInfosBody, BTHomeGetObjectInfosResponse } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-get-object-infos.types';

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

export interface NumberMethodsMapping {
  [NumberMethods.GetConfig]: {
    body: NumberGetConfigBody;
    response: NumberGetConfigResponse;
  };
  [NumberMethods.GetStatus]: {
    body: NumberGetStatusBody;
    response: NumberGetStatusResponse;
  };
  [NumberMethods.SetConfig]: {
    body: NumberSetConfigBody;
    response: NumberSetConfigResponse;
  };
  [NumberMethods.Set]: {
    body: NumberSetBody;
    response: NumberSetResponse;
  };
}

export interface TextMethodsMapping {
  [TextMethods.GetConfig]: {
    body: TextGetConfigBody;
    response: TextGetConfigResponse;
  };
  [TextMethods.GetStatus]: {
    body: TextGetStatusBody;
    response: TextGetStatusResponse;
  };
  [TextMethods.SetConfig]: {
    body: TextSetConfigBody;
    response: TextSetConfigResponse;
  };
  [TextMethods.Set]: {
    body: TextSetBody;
    response: TextSetResponse;
  };
}

export interface EnumMethodsMapping {
  [EnumMethods.GetConfig]: {
    body: EnumGetConfigBody;
    response: EnumGetConfigResponse;
  };
  [EnumMethods.GetStatus]: {
    body: EnumGetStatusBody;
    response: EnumGetStatusResponse;
  };
  [EnumMethods.SetConfig]: {
    body: EnumSetConfigBody;
    response: EnumSetConfigResponse;
  };
  [EnumMethods.Set]: {
    body: EnumSetBody;
    response: EnumSetResponse;
  };
}

export interface ButtonMethodsMapping {
  [ButtonMethods.GetConfig]: {
    body: ButtonGetConfigBody;
    response: ButtonGetConfigResponse;
  };
  [ButtonMethods.SetConfig]: {
    body: ButtonSetConfigBody;
    response: ButtonSetConfigResponse;
  };
  [ButtonMethods.Trigger]: {
    body: ButtonTriggerBody;
    response: ButtonTriggerResponse;
  };
}

export interface GroupMethodsMapping {
  [GroupMethods.GetConfig]: {
    body: GroupGetConfigBody;
    response: GroupGetConfigResponse;
  };
  [GroupMethods.GetStatus]: {
    body: GroupGetStatusBody;
    response: GroupGetStatusResponse;
  };
  [GroupMethods.SetConfig]: {
    body: GroupSetConfigBody;
    response: GroupSetConfigResponse;
  };
  [GroupMethods.Set]: {
    body: GroupSetBody;
    response: GroupSetResponse;
  };
}

export interface BTHomeMethodsMapping {
  [BTHomeMethods.GetConfig]: {
    body: undefined;
    response: BaseShellyResponse<{}>;
  };
  [BTHomeMethods.GetStatus]: {
    body: undefined;
    response: BTHomeGetStatusResponse;
  };
  [BTHomeMethods.SetConfig]: {
    body: undefined;
    response: BaseShellyResponse<null>;
  };
  [BTHomeMethods.AddDevice]: {
    body: BTHomeAddDeviceBody;
    response: BTHomeAddDeviceResponse;
  };
  [BTHomeMethods.DeleteDevice]: {
    body: BTHomeDeleteDeviceBody;
    response: BTHomeDeleteDeviceResponse;
  };
  [BTHomeMethods.AddSensor]: {
    body: BTHomeAddSensorBody;
    response: BTHomeAddSensorResponse;
  };
  [BTHomeMethods.DeleteSensor]: {
    body: BTHomeDeleteSensorBody;
    response: BTHomeDeleteSensorResponse;
  };
  [BTHomeMethods.StartDeviceDiscovery]: {
    body: BTHomeStartDeviceDiscoveryBody;
    response: BTHomeStartDeviceDiscoveryResponse;
  };
  [BTHomeMethods.GetObjectInfos]: {
    body: BTHomeGetObjectInfosBody;
    response: BTHomeGetObjectInfosResponse;
  };
}

export interface ShellyGen3HTTPAPIMapping
  extends BooleanMethodsMapping,
    BTHomeMethodsMapping,
    ButtonMethodsMapping,
    EnumMethodsMapping,
    GroupMethodsMapping,
    NumberMethodsMapping,
    TextMethodsMapping,
    VirtualComponentMethodsMapping {}
