import {
  BooleanMethods,
  ButtonMethods,
  EnumMethods,
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
import {
  ButtonGetConfigBody,
  ButtonGetConfigResponse,
} from '@gen3/endpoints/dynamic/virtual/button/button-get-config.types';
import {
  ButtonSetConfigBody,
  ButtonSetConfigResponse,
} from '@gen3/endpoints/dynamic/virtual/button/button-set-config.types';
import { ButtonTriggerBody, ButtonTriggerResponse } from '@gen3/endpoints/dynamic/virtual/button/button-trigger.types';

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

export interface ShellyGen3HTTPAPIMapping
  extends VirtualComponentMethodsMapping,
    BooleanMethodsMapping,
    NumberMethodsMapping,
    TextMethodsMapping,
    EnumMethodsMapping,
    ButtonMethodsMapping {}
