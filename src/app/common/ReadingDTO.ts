export interface ReadingDTO {
  id: number|string|any;
  device_id: string;
  temperature?: number; // Optional, as some readings may not have temperature
  humidity?: number;    // Optional, as some readings may not have humidity
  vibration?: number;   // Optional, for device
  timestamp: string;
}