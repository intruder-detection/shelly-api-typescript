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
  ShellyMethods, SwitchMethods,
  SystemMethods,
  WebhookMethods,
  WifiMethods,
  WsMethods,
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
import { EmptyResponse } from '@common/generic.types';
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
import { WsSetConfigBody, WsSetConfigResponse } from '@gen2/endpoints/types/ws/ws-set-config.types';
import { WsGetStatusResponse } from '@gen2/endpoints/types/ws/ws-get-status.types';
import { WsGetConfigResponse } from '@gen2/endpoints/types/ws/ws-get-config.types';
import { SwitchGetStatusBody, SwitchGetStatusResponse } from '@gen2/endpoints/types/switch/switch-get-status.types';
import { ScriptStopBody, ScriptStopResponse } from '@gen2/endpoints/types/script/script-stop.types';
import { SwitchGetConfigBody, SwitchGetConfigResponse } from '@gen2/endpoints/types/switch/switch-get-config.types';
import { SwitchSetConfigBody, SwitchSetConfigResponse } from '@gen2/endpoints/types/switch/switch-set-config.types';
import { SwitchSetBody, SwitchSetResponse } from '@gen2/endpoints/types/switch/switch-set.types';
import { SwitchToggleBody, SwitchToggleResponse } from '@gen2/endpoints/types/switch/switch-toggle.types';
import {
  SwitchResetCountersBody,
  SwitchResetCountersResponse,
} from '@gen2/endpoints/types/switch/switch-reset-counters.types';

interface WifiMethodsMapping {
  [WifiMethods.GetConfig]: {
    body: undefined;
    response: WifiGetConfigResponse;
  };
  [WifiMethods.SetConfig]: {
    body: WifiSetConfigBody;
    response: WifiSetConfigResponse;
  };
  [WifiMethods.GetStatus]: {
    body: undefined;
    response: WifiGetStatusResponse;
  };
  [WifiMethods.ListAPClients]: {
    body: undefined;
    response: WifiListAPClientsResponse;
  };
  [WifiMethods.Scan]: {
    body: undefined;
    response: WifiScanResponse;
  };
}

interface ShellyMethodsMapping {
  [ShellyMethods.GetStatus]: {
    body: undefined;
    response: GetStatusResponse;
  };
  [ShellyMethods.GetConfig]: {
    body: undefined;
    response: GetConfigResponse;
  };
  [ShellyMethods.ListMethods]: {
    body: undefined;
    response: ListMethodsResponse;
  };
  [ShellyMethods.GetDeviceInfo]: {
    body?: GetDeviceInfoBody;
    response: GetDeviceInfoResponse;
  };
  [ShellyMethods.ListProfiles]: {
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.SetProfile]: {
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.ListTimezones]: {
    body: undefined;
    response: ListTimezonesResponse;
  };
  [ShellyMethods.DetectLocation]: {
    body: undefined;
    response: DetectLocationResponse;
  };
  [ShellyMethods.CheckForUpdate]: {
    body: undefined;
    response: CheckForUpdateResponse;
  };
  [ShellyMethods.Update]: {
    body: UpdateBody;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.FactoryReset]: {
    body: undefined;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.ResetWiFiConfig]: {
    body: undefined;
    response: EmptyResponse;
  };
  [ShellyMethods.Reboot]: {
    body: RebootBody;
    response: EmptyResponse;
  };
  [ShellyMethods.SetAuth]: {
    body: SetAuthBody;
    response: EmptyResponse;
  };
  [ShellyMethods.PutUserCA]: {
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientCert]: {
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientKey]: {
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.GetComponents]: {
    body: GetComponentsBody;
    response: GetComponentsResponse;
  };
}

interface ShellyExtraMethodsMapping {
  [ShellyExtraMethods.Shelly]: {
    body: undefined;
    response: GetDeviceInfoResponseResult;
  };
}

interface BLEMethodsMapping {
  [BLEMethods.GetStatus]: {
    body: undefined;
    response: BLEGetStatusResponse;
  };
  [BLEMethods.GetConfig]: {
    body: undefined;
    response: BleConfigResponse;
  };
  [BLEMethods.SetConfig]: {
    body: BLESetConfigBody;
    response: BLESetConfigResponse;
  };
}

interface CloudMethodsMapping {
  [CloudMethods.GetStatus]: {
    body: undefined;
    response: CloudGetStatusResponse;
  };
  [CloudMethods.GetConfig]: {
    body: undefined;
    response: CloudConfigResponse;
  };
  [CloudMethods.SetConfig]: {
    body: CloudSetConfigBody;
    response: CloudSetConfigResponse;
  };
}

interface SystemMethodsMapping {
  [SystemMethods.GetStatus]: {
    body: undefined;
    response: SystemGetStatusResponse;
  };
  [SystemMethods.GetConfig]: {
    body: undefined;
    response: SystemGetConfigResponse;
  };
  [SystemMethods.SetConfig]: {
    body: SystemSetConfigBody;
    response: SystemSetConfigResponse;
  };
}

interface ScheduleMethodMapping {
  [ScheduleMethods.List]: {
    body: undefined;
    response: ListSchedulesResponse;
  };
  [ScheduleMethods.Create]: {
    body: CreateScheduleBody;
    response: CreateScheduleResponse;
  };
  [ScheduleMethods.Update]: {
    body: UpdateScheduleBody;
    response: UpdateScheduleResponse;
  };
  [ScheduleMethods.Delete]: {
    body: DeleteScheduleBody;
    response: DeleteScheduleResponse;
  };
  [ScheduleMethods.DeleteAll]: {
    body: undefined;
    response: DeleteAllSchedulesResponse;
  };
}

interface ScriptMethodsMapping {
  [ScriptMethods.List]: {
    body: undefined;
    response: ScriptListResponse;
  };
  [ScriptMethods.GetCode]: {
    body: ScriptGetCodeBody;
    response: ScriptGetCodeResponse;
  };
  [ScriptMethods.GetConfig]: {
    body: ScriptGetConfigBody;
    response: ScriptGetConfigResponse;
  };
  [ScriptMethods.SetConfig]: {
    body: ScriptSetConfigBody;
    response: ScriptSetConfigResponse;
  };
  [ScriptMethods.GetStatus]: {
    body: ScriptGetStatusBody;
    response: ScriptGetStatusResponse;
  };
  [ScriptMethods.Create]: {
    body: ScriptCreateBody;
    response: ScriptCreateResponse;
  };
  [ScriptMethods.PutCode]: {
    body: ScriptPutCodeBody;
    response: ScriptPutCodeResponse;
  };
  [ScriptMethods.Eval]: {
    body: ScriptEvalBody;
    response: ScriptEvalResponse;
  };
  [ScriptMethods.Start]: {
    body: ScriptStartBody;
    response: ScriptStartResponse;
  };
  [ScriptMethods.Delete]: {
    body: ScriptDeleteBody;
    response: ScriptDeleteResponse;
  };
  [ScriptMethods.Stop]: {
    body: ScriptStopBody;
    response: ScriptStopResponse;
  };
}

interface KVSMethodsMapping {
  [KVSMethods.List]: {
    body: KVSListBody;
    response: KVSListResponse;
  };
  [KVSMethods.GetMany]: {
    body: KVSGetManyBody;
    response: KVSGetManyResponse;
  };
  [KVSMethods.Get]: {
    body: KVSGetBody;
    response: KVSGetResponse;
  };
  [KVSMethods.Delete]: {
    body: KVSDeleteBody;
    response: KVSDeleteResponse;
  };
  [KVSMethods.Set]: {
    body: KVSSetBody;
    response: KVSSetResponse;
  };
}

interface EthernetMethodsMapping {
  [EthernetMethods.GetStatus]: {
    body: undefined;
    response: EthGetStatusResponse;
  };
  [EthernetMethods.GetConfig]: {
    body: undefined;
    response: EthGetConfigResponse;
  };
  [EthernetMethods.SetConfig]: {
    body: EthSetConfigBody;
    response: EthSetConfigResponse;
  };
}

interface InputMethodsMapping {
  [InputMethods.GetStatus]: {
    body: InputIdBody;
    response: InputGetStatusResponse;
  };
  [InputMethods.GetConfig]: {
    body: InputIdBody;
    response: InputGetConfigResponse;
  };
  [InputMethods.SetConfig]: {
    body: InputSetConfigBody;
    response: InputSetConfigResponse;
  };
  [InputMethods.CheckExpression]: {
    body: InputCheckExpressionBody;
    response: InputCheckExpressionResponse; // TODO: Need device to test
  };
  [InputMethods.ResetCounters]: {
    body: InputResetCountersBody;
    response: InputResetCountersResponse; // TODO: Need device to test
  };
  [InputMethods.Trigger]: {
    body: InputTriggerBody;
    response: InputTriggerResponse; // TODO: Need device to test
  };
}

interface MQTTMethodsMapping {
  [MQTTMethods.GetStatus]: {
    body: undefined;
    response: MQTTGetStatusResponse;
  };
  [MQTTMethods.GetConfig]: {
    body: undefined;
    response: MQTTGetConfigResponse;
  };
  [MQTTMethods.SetConfig]: {
    body: MQTTSetConfigBody;
    response: MQTTSetConfigResponse;
  };
}

interface WebhooksMethodsMapping {
  [WebhookMethods.ListSupported]: {
    body: undefined;
    response: ListSupportedWebhooksResponse;
  };
  [WebhookMethods.List]: {
    body: undefined;
    response: ListWebhooksResponse;
  };
  [WebhookMethods.Delete]: {
    body: DeleteWebhookBody;
    response: DeleteWebhookResponse;
  };
  [WebhookMethods.DeleteAll]: {
    body: undefined;
    response: DeleteAllWebhooksResponse;
  };
  [WebhookMethods.Create]: {
    body: CreateWebhookBody;
    response: CreateWebhookResponse; // TODO: Need device to test
  };
  [WebhookMethods.Update]: {
    body: UpdateWebhookBody;
    response: UpdateWebhookResponse; // TODO: Need device to test
  };
}

export interface WebsocketMethodsMapping {
  [WsMethods.GetConfig]: {
    body: undefined;
    response: WsGetConfigResponse;
  };
  [WsMethods.GetStatus]: {
    body: undefined;
    response: WsGetStatusResponse;
  };
  [WsMethods.SetConfig]: {
    body: WsSetConfigBody;
    response: WsSetConfigResponse;
  };
}

// TODO: Need device to test Switch
export interface SwitchMethodsMapping {
  [SwitchMethods.GetConfig]: {
    body: SwitchGetConfigBody;
    response: SwitchGetConfigResponse;
  };
  [SwitchMethods.GetStatus]: {
    body: SwitchGetStatusBody;
    response: SwitchGetStatusResponse;
  };
  [SwitchMethods.SetConfig]: {
    body: SwitchSetConfigBody;
    response: SwitchSetConfigResponse;
  };
  [SwitchMethods.Set]: {
    body: SwitchSetBody;
    response: SwitchSetResponse;
  };
  [SwitchMethods.Toggle]: {
    body: SwitchToggleBody;
    response: SwitchToggleResponse;
  };
  [SwitchMethods.ResetCounters]: {
    body: SwitchResetCountersBody;
    response: SwitchResetCountersResponse;
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
    SwitchMethodsMapping,
    SystemMethodsMapping,
    WebhooksMethodsMapping,
    WebsocketMethodsMapping,
    WifiMethodsMapping {}
