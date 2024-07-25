# Shelly API client Demos

1. [Connect gen+ devices from WiFi](./demos/connect-any-wifi-device-from-scratch.ts)
    * Connects the Shelly Gen2+ device to the provided WiFi Network. This works for any device even if it was never connected to Shelly Cloud.
    * You can provide environment variables (as shown bellow) otherwise you'll be prompted to input them
   
    | Env variable                	| Description                                         	                                                      |
    |-----------------------------	|------------------------------------------------------------------------------------------------------------|
    | WIFI_SSID                   	| SSID of the WiFi Network to connec to               	                                                      |
    | WIFI_PASSWORD               	| Password of the WiFi Network to connec to           	                                                      |
    | STATIC_IP_FOR_SHELLY_DEVICE 	| Provide the static IP address the Shelly device should use  after connecting to the provided WiFi network	 |
2. [Get Device configuration by IP](./demos/get-device-configuration.ts)
   * Given the IP address tries to access the Shelly device and retrieve the configuration and status
2. [Shelly BLU Gateway setup from scratch](./demos/shelly-blu-gw/setup-shelly-blu-gw-from-scratch.ts)
    * Connects the Shelly BLU GW device to the provided WiFi Network (SSID/Password should be passed as environment
      variables)
    * Waits for the connection from the device to exist
    * Uploads code to process BLU devices data and send it over MQTT
        * `MQTT_SERVER_URL`/`MQTT_TOPIC` should be provided as environment variables
