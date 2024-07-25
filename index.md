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

In the following video, we see how easy it is to use the API client 

<video src="converted_file.mp4" width="800" height="600" controls></video>
