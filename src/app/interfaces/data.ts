export interface Data {
  coord?: {
    lon: string;
    lat: string;
  };
  weather?: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main?: {
    temp: string;
    feels_like: string;
    pressure: string;
    humidity: string;
  };
  wind?: {
    speed: string;
    deg: number;
  };
  clouds?: {
    all: number;
  };
  rain?: boolean;
  snow?: boolean;
  visibility?: number;
  name?: string;
  sys?: {
    id: number;
    country: string;
  };
}
