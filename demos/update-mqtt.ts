import { MqttHelpers, ShellyGen2PlusHTTPAPI, ShellyHelpers } from '@intruder-detection/shelly-api-typescript';
import process from 'node:process';

async function updateMQTTServer(deviceName: string) {
  const device = new ShellyGen2PlusHTTPAPI(process.env.STATIC_IP_FOR_SHELLY_DEVICE);

  const mqttHelpers = new MqttHelpers(device);

  await mqttHelpers.setConfig({
    enable: true,
    server: process.env.MQTT_SERVER_URL,
    client_id: deviceName,
    topic_prefix: process.env.MQTT_TOPIC,
  });

  // Reboot to connect device
  await new ShellyHelpers(device).reboot();
}

await updateMQTTServer(process.env.DEVICE_NAME);
