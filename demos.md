# Shelly API Typescript Demos

There's a [branch with demos](https://github.com/intruder-detection/shelly-api-typescript/tree/demos) for the API client.

In the following video, we see how easy it is to use the API client

<video src="./demos/simple_usage.mp4" width="800" height="600"  controls ></video>

---

## Connect a newly bought device to a specific WiFi network

In this demo video we can see how we can use the API to connect a device that we just bought into our WiFi network without using Shelly App or Shelly cloud.

In the video we do:
1. Connect to the Shelly device's AP WiFi network
2. Visit 192.168.33.1 (default AP network IP)
3. Use the [connect-any-wifi-device-from-scratch.ts](https://github.com/intruder-detection/shelly-api-typescript/blob/demos/demos/connect-any-wifi-device-from-scratch.ts) script to connect the device to our WiFi network (script prompts for password/ssid/static IP)


<video src="./demos/connect-any-wifi-device-from-scratch.mp4" width="800" height="600" controls ></video>

4. Use [get-device-configuration.ts](https://github.com/intruder-detection/shelly-api-typescript/blob/demos/demos/get-device-configuration.ts) script to verify the configuration/status of the newly added device

<video src="./demos/get-device-configuration.mp4" width="800" height="600" controls ></video>
