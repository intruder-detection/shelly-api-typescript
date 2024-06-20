import {
  BLEMethods,
  CloudMethods,
  EthernetMethods,
  InputMethods,
  KVSMethods,
  MQTTMethods,
  ScheduleMethods,
  ScriptMethods,
  ShellyExtraMethods,
  ShellyMethods,
  SystemMethods, WebhookMethods,
  WifiMethods,
} from './methods.enum';
import { WifiGetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-get-config-response.interface';
import { WifiGetStatusResponse } from '@gen2/endpoints/types/wifi/wifi-get-status-response.interface';
import { WifiListAPClientsResponse } from '@gen2/endpoints/types/wifi/wifi-list-ap-clients-response.interface';
import { WifiScanResponse } from '@gen2/endpoints/types/wifi/wifi-scan-response.interface';
import { WifiSetConfigBody, WifiSetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-set-config.interface';
import { GetStatusResponse } from '@gen2/endpoints/types/shelly/get-status-response.interface';
import { GetConfigResponse } from '@gen2/endpoints/types/shelly/get-config-response.interface';
import { ListMethodsResponse } from '@gen2/endpoints/types/shelly/list-methods-response.interface';
import { GetDeviceInfoBody, GetDeviceInfoResponse, GetDeviceInfoResponseResult } from '@gen2/endpoints/types/shelly/get-device-info.interface';
import { ListTimezonesResponse } from '@gen2/endpoints/types/shelly/list-timezones-response.interface';
import { DetectLocationResponse } from '@gen2/endpoints/types/shelly/detect-device-location-response.interface';
import { CheckForUpdateResponse } from '@gen2/endpoints/types/shelly/check-for-update-response.interface';
import { UpdateBody } from '@gen2/endpoints/types/shelly/update.interface';
import { EmptyResponse } from '@gen2/generic.types';
import { RebootBody } from '@gen2/endpoints/types/shelly/reboot.interface';
import { SetAuthBody } from '@gen2/endpoints/types/shelly/set-auth.interface';
import { PutUserCaBody, PutUserCaResponse } from '@gen2/endpoints/types/shelly/put-user-ca.interface';
import { GetComponentsBody, GetComponentsResponse } from '@gen2/endpoints/types/shelly/get-components.interface';
import { BleConfigResponse } from '@gen2/endpoints/types/ble/ble-config-response.interface';
import { BLEGetStatusResponse } from '@gen2/endpoints/types/ble/ble-get-status-response.interface';
import { BLESetConfigBody, BLESetConfigResponse } from '@gen2/endpoints/types/ble/ble-set-config-interface';
import { CloudSetConfigBody, CloudSetConfigResponse } from '@gen2/endpoints/types/cloud/cloud-set-config-interface';
import { CloudGetStatusResponse } from '@gen2/endpoints/types/cloud/cloud-get-status-response.interface';
import { CloudConfigResponse } from '@gen2/endpoints/types/cloud/cloud-config-response.interface';
import { SystemGetStatusResponse } from '@gen2/endpoints/types/system/system-get-status-response.interface';
import { SystemGetConfigResponse } from '@gen2/endpoints/types/system/system-get-config-response.interface';
import { SystemSetConfigBody, SystemSetConfigResponse } from '@gen2/endpoints/types/system/system-set-config-interface';
import { ListSchedulesResponse } from '@gen2/endpoints/types/schedules/list-schedules.interface';
import { CreateScheduleBody, CreateScheduleResponse } from '@gen2/endpoints/types/schedules/create-schedule.interface';
import { UpdateScheduleBody, UpdateScheduleResponse } from '@gen2/endpoints/types/schedules/update-schedule.types';
import { DeleteScheduleBody, DeleteScheduleResponse } from '@gen2/endpoints/types/schedules/delete-schedule.interface';
import { DeleteAllSchedulesResponse } from '@gen2/endpoints/types/schedules/delete-all-schedules.interface';
import { ScriptListResponse } from '@gen2/endpoints/types/script/script-list.types';
import { ScriptGetCodeBody, ScriptGetCodeResponse } from '@gen2/endpoints/types/script/script-get-code.types';
import { ScriptGetConfigBody, ScriptGetConfigResponse } from '@gen2/endpoints/types/script/script-get-config.types';
import { ScriptGetStatusBody, ScriptGetStatusResponse } from '@gen2/endpoints/types/script/script-get-status.types';
import { ScriptSetConfigBody, ScriptSetConfigResponse } from '@gen2/endpoints/types/script/script-set-config.types';
import { ScriptCreateBody, ScriptCreateResponse } from '@gen2/endpoints/types/script/script-create.types';
import { ScriptEvalBody, ScriptEvalResponse } from '@gen2/endpoints/types/script/script-eval.types';
import { ScriptDeleteBody, ScriptDeleteResponse } from '@gen2/endpoints/types/script/script-delete.types';
import { ScriptStartBody, ScriptStartResponse } from '@gen2/endpoints/types/script/script-start.types';
import { ScriptPutCodeBody, ScriptPutCodeResponse } from '@gen2/endpoints/types/script/script-put-code.types';
import { EthSetConfigBody, EthSetConfigResponse } from '@gen2/endpoints/types/ethernet/eth-set-config.types';
import { EthGetConfigResponse } from '@gen2/endpoints/types/ethernet/eth-get-config.types';
import { EthGetStatusResponse } from '@gen2/endpoints/types/ethernet/eth-get-status.types';
import { KVSListBody, KVSListResponse } from '@gen2/endpoints/types/kvs/kvs-list.types';
import { KVSGetManyBody, KVSGetManyResponse } from '@gen2/endpoints/types/kvs/kvs-get-many.types';
import { KVSGetBody, KVSGetResponse } from '@gen2/endpoints/types/kvs/kvs-get.types';
import { KVSDeleteBody, KVSDeleteResponse } from '@gen2/endpoints/types/kvs/kvs-delete.types';
import { KVSSetBody, KVSSetResponse } from '@gen2/endpoints/types/kvs/kvs-set.types';
import { InputGetStatusResponse } from '@gen2/endpoints/types/input/input-get-status.types';
import { InputIdBody } from '@gen2/endpoints/types/input/input-common.types';
import { InputGetConfigResponse } from '@gen2/endpoints/types/input/input-get-config.types';
import { InputSetConfigBody, InputSetConfigResponse } from '@gen2/endpoints/types/input/input-set-config.types';
import { InputCheckExpressionBody, InputCheckExpressionResponse } from '@gen2/endpoints/types/input/input-check-expression.types';
import { InputResetCountersBody, InputResetCountersResponse } from '@gen2/endpoints/types/input/input-reset-counters.types';
import { InputTriggerBody, InputTriggerResponse } from '@gen2/endpoints/types/input/input-trigger.types';
import { MQTTSetConfigBody, MQTTSetConfigResponse } from '@gen2/endpoints/types/mqtt/mqtt-set-config.types';
import { MQTTGetStatusResponse } from '@gen2/endpoints/types/mqtt/mqtt-get-status.types';
import { MQTTGetConfigResponse } from '@gen2/endpoints/types/mqtt/mqtt-get-config.types';
import { ListSupportedWebhooksResponse } from '@gen2/endpoints/types/webhooks/list-supported-webhooks.types';
import { ListWebhooksResponse } from '@gen2/endpoints/types/webhooks/list-webhooks.types';
import { CreateWebhookBody, CreateWebhookResponse } from '@gen2/endpoints/types/webhooks/create-webhook.types';
import { DeleteWebhookBody, DeleteWebhookResponse } from '@gen2/endpoints/types/webhooks/delete-webhook.types';
import { DeleteAllWebhooksResponse } from '@gen2/endpoints/types/webhooks/delete-all-webhooks.types';
import { UpdateWebhookBody, UpdateWebhookResponse } from '@gen2/endpoints/types/webhooks/update-webhook.types';

interface WifiMethodsMapping {
  [WifiMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetConfigResponse;
  };
  [WifiMethods.SetConfig]: {
    queryParams: undefined;
    body: WifiSetConfigBody;
    response: WifiSetConfigResponse;
  };
  [WifiMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetStatusResponse;
  };
  [WifiMethods.ListAPClients]: {
    queryParams: undefined;
    body: undefined;
    response: WifiListAPClientsResponse;
  };
  [WifiMethods.Scan]: {
    queryParams: undefined;
    body: undefined;
    response: WifiScanResponse;
  };
}

interface ShellyMethodsMapping {
  [ShellyMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: GetStatusResponse;
  };
  [ShellyMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: GetConfigResponse;
  };
  [ShellyMethods.ListMethods]: {
    queryParams: undefined;
    body: undefined;
    response: ListMethodsResponse;
  };
  [ShellyMethods.GetDeviceInfo]: {
    queryParams: undefined;
    body?: GetDeviceInfoBody;
    response: GetDeviceInfoResponse;
  };
  [ShellyMethods.ListProfiles]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.SetProfile]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.ListTimezones]: {
    queryParams: undefined;
    body: undefined;
    response: ListTimezonesResponse;
  };
  [ShellyMethods.DetectLocation]: {
    queryParams: undefined;
    body: undefined;
    response: DetectLocationResponse;
  };
  [ShellyMethods.CheckForUpdate]: {
    queryParams: undefined;
    body: undefined;
    response: CheckForUpdateResponse;
  };
  [ShellyMethods.Update]: {
    queryParams: undefined;
    body: UpdateBody;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.FactoryReset]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.ResetWiFiConfig]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse;
  };
  [ShellyMethods.Reboot]: {
    queryParams: undefined;
    body: RebootBody;
    response: EmptyResponse;
  };
  [ShellyMethods.SetAuth]: {
    queryParams: undefined;
    body: SetAuthBody;
    response: EmptyResponse;
  };
  [ShellyMethods.PutUserCA]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientCert]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientKey]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.GetComponents]: {
    queryParams: undefined;
    body: GetComponentsBody;
    response: GetComponentsResponse;
  };
}

interface ShellyExtraMethodsMapping {
  [ShellyExtraMethods.Shelly]: {
    queryParams: undefined;
    body: undefined;
    response: GetDeviceInfoResponseResult;
  };
}

interface BLEMethodsMapping {
  [BLEMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: BLEGetStatusResponse;
  };
  [BLEMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: BleConfigResponse;
  };
  [BLEMethods.SetConfig]: {
    queryParams: undefined;
    body: BLESetConfigBody;
    response: BLESetConfigResponse;
  };
}

interface CloudMethodsMapping {
  [CloudMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: CloudGetStatusResponse;
  };
  [CloudMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: CloudConfigResponse;
  };
  [CloudMethods.SetConfig]: {
    queryParams: undefined;
    body: CloudSetConfigBody;
    response: CloudSetConfigResponse;
  };
}

interface SystemMethodsMapping {
  [SystemMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: SystemGetStatusResponse;
  };
  [SystemMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: SystemGetConfigResponse;
  };
  [SystemMethods.SetConfig]: {
    queryParams: undefined;
    body: SystemSetConfigBody;
    response: SystemSetConfigResponse;
  };
}

interface ScheduleMethodMapping {
  [ScheduleMethods.List]: {
    queryParams: undefined;
    body: undefined;
    response: ListSchedulesResponse;
  };
  [ScheduleMethods.Create]: {
    queryParams: undefined;
    body: CreateScheduleBody;
    response: CreateScheduleResponse;
  };
  [ScheduleMethods.Update]: {
    queryParams: undefined;
    body: UpdateScheduleBody;
    response: UpdateScheduleResponse;
  };
  [ScheduleMethods.Delete]: {
    queryParams: undefined;
    body: DeleteScheduleBody;
    response: DeleteScheduleResponse;
  };
  [ScheduleMethods.DeleteAll]: {
    queryParams: undefined;
    body: undefined;
    response: DeleteAllSchedulesResponse;
  };
}

interface ScriptMethodsMapping {
  [ScriptMethods.List]: {
    queryParams: undefined;
    body: undefined;
    response: ScriptListResponse;
  };
  [ScriptMethods.GetCode]: {
    queryParams: undefined;
    body: ScriptGetCodeBody;
    response: ScriptGetCodeResponse;
  };
  [ScriptMethods.GetConfig]: {
    queryParams: undefined;
    body: ScriptGetConfigBody;
    response: ScriptGetConfigResponse;
  };
  [ScriptMethods.SetConfig]: {
    queryParams: undefined;
    body: ScriptSetConfigBody;
    response: ScriptSetConfigResponse;
  };
  [ScriptMethods.GetStatus]: {
    queryParams: undefined;
    body: ScriptGetStatusBody;
    response: ScriptGetStatusResponse;
  };
  [ScriptMethods.Create]: {
    queryParams: undefined;
    body: ScriptCreateBody;
    response: ScriptCreateResponse;
  };
  [ScriptMethods.PutCode]: {
    queryParams: undefined;
    body: ScriptPutCodeBody;
    response: ScriptPutCodeResponse;
  };
  [ScriptMethods.Eval]: {
    queryParams: undefined;
    body: ScriptEvalBody;
    response: ScriptEvalResponse;
  };
  [ScriptMethods.Start]: {
    queryParams: undefined;
    body: ScriptStartBody;
    response: ScriptStartResponse;
  };
  [ScriptMethods.Delete]: {
    queryParams: undefined;
    body: ScriptDeleteBody;
    response: ScriptDeleteResponse;
  };
}

interface KVSMethodsMapping {
  [KVSMethods.List]: {
    queryParams: undefined;
    body: KVSListBody;
    response: KVSListResponse;
  };
  [KVSMethods.GetMany]: {
    queryParams: undefined;
    body: KVSGetManyBody;
    response: KVSGetManyResponse;
  };
  [KVSMethods.Get]: {
    queryParams: undefined;
    body: KVSGetBody;
    response: KVSGetResponse;
  };
  [KVSMethods.Delete]: {
    queryParams: undefined;
    body: KVSDeleteBody;
    response: KVSDeleteResponse;
  };
  [KVSMethods.Set]: {
    queryParams: undefined;
    body: KVSSetBody;
    response: KVSSetResponse;
  };
}

interface EthernetMethodsMapping {
  [EthernetMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: EthGetStatusResponse;
  };
  [EthernetMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: EthGetConfigResponse;
  };
  [EthernetMethods.SetConfig]: {
    queryParams: undefined;
    body: EthSetConfigBody;
    response: EthSetConfigResponse;
  };
}

interface InputMethodsMapping {
  [InputMethods.GetStatus]: {
    queryParams: undefined;
    body: InputIdBody;
    response: InputGetStatusResponse;
  };
  [InputMethods.GetConfig]: {
    queryParams: undefined;
    body: InputIdBody;
    response: InputGetConfigResponse;
  };
  [InputMethods.SetConfig]: {
    queryParams: undefined;
    body: InputSetConfigBody;
    response: InputSetConfigResponse;
  };
  [InputMethods.CheckExpression]: {
    queryParams: undefined;
    body: InputCheckExpressionBody;
    response: InputCheckExpressionResponse; // TODO: Need device to test
  };
  [InputMethods.ResetCounters]: {
    queryParams: undefined;
    body: InputResetCountersBody;
    response: InputResetCountersResponse; // TODO: Need device to test
  };
  [InputMethods.Trigger]: {
    queryParams: undefined;
    body: InputTriggerBody;
    response: InputTriggerResponse; // TODO: Need device to test
  };
}

interface MQTTMethodsMapping {
  [MQTTMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: MQTTGetStatusResponse;
  };
  [MQTTMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: MQTTGetConfigResponse;
  };
  [MQTTMethods.SetConfig]: {
    queryParams: undefined;
    body: MQTTSetConfigBody;
    response: MQTTSetConfigResponse;
  };
}

interface WebhooksMethodsMapping {
  [WebhookMethods.ListSupported]: {
    queryParams: undefined;
    body: undefined;
    response: ListSupportedWebhooksResponse;
  };
  [WebhookMethods.List]: {
    queryParams: undefined;
    body: undefined;
    response: ListWebhooksResponse;
  };
  [WebhookMethods.Delete]: {
    queryParams: undefined;
    body: DeleteWebhookBody;
    response: DeleteWebhookResponse;
  };
  [WebhookMethods.DeleteAll]: {
    queryParams: undefined;
    body: undefined;
    response: DeleteAllWebhooksResponse;
  };
  [WebhookMethods.Create]: {
    queryParams: undefined;
    body: CreateWebhookBody;
    response: CreateWebhookResponse; // TODO: Need device to test
  };
  [WebhookMethods.Update]: {
    queryParams: undefined;
    body: UpdateWebhookBody;
    response: UpdateWebhookResponse; // TODO: Need device to test
  };
}

export interface ShellyGen2HTTPAPIMapping
  extends BLEMethodsMapping,
    CloudMethodsMapping,
    EthernetMethodsMapping,
    InputMethodsMapping,
    KVSMethodsMapping,
    MQTTMethodsMapping,
    ScheduleMethodMapping,
    ScriptMethodsMapping,
    ShellyMethodsMapping,
    ShellyExtraMethodsMapping,
    SystemMethodsMapping,
    WebhooksMethodsMapping,
    WifiMethodsMapping {}
