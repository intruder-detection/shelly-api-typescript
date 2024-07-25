---
layout: default
---

Strongly typed Shelly API client written in Typescript

## Install

You can install it in a Typescript/Javascript project by doing the following:

```bash
npm i @intruder-detection/shelly-api-typescript
```

## Usage

```ts
import { ShellyGen2PlusHTTPAPI, ShellyMethods } from '@intruder-detection/shelly-api-typescript';

const gen2Device = new ShellyGen2PlusHTTPAPI('<SHELLY_GEN2_DEVICE_IP>');
const status = await gen2Device.post(ShellyMethods.GetStatus);
console.log(status);
```

Almost all methods of [Gen2+ devices](https://shelly-api-docs.shelly.cloud/gen2/) are present in the current client implementation. Head over to the Demos page for more examples of the usage.

