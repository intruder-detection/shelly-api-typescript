# Shelly API Typescript 

Strongly typed Shelly API client written in Typescript

## Install

You can install it in a Typescript/Javascript project by doing the following:

```bash
npm i @intruder-detection/shelly-api-typescript
```

## Usage

```ts
import { ShellyGen2PlusHTTPAPI, ShellyMethods } from '@intruder-detection/shelly-api-typescript';

const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');
const status = await gen2Device.post(ShellyMethods.GetStatus);
console.log(status);
```

# Demos

There are some [helper scripts](https://github.com/intruder-detection/shelly-api-typescript/tree/scripts/scripts)/demos that show how to use the client API in the [demos](https://github.com/intruder-detection/shelly-api-typescript/tree/demos) branch
