# Shelly API client Demos

1. [Connect gen+ devices from WiFi](./demos/connect-any-wifi-device-from-scratch.ts)
   * Connects the Shelly Gen2+ device to the provided WiFi Network (SSID/Password should be passed as environment variables)
2. [Shelly BLU Gateway setup from scratch](./demos/shelly-blu-gw/setup-shelly-blu-gw-from-scratch.ts)
   * Connects the Shelly BLU GW device to the provided WiFi Network (SSID/Password should be passed as environment variables)
   * Waits for the connection from the device to exist
   * Uploads code to process BLU devices data and send it over MQTT 
     * `MQTT_SERVER_URL`/`MQTT_TOPIC` should be provided as environment variables
