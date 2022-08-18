export interface WeatherData {
  location: Location
  current_observation: CurrentObservation
}

export interface Location {
  city: string
  country: string
}

export interface CurrentObservation {
  wind: Wind
  atmosphere: Atmosphere
  astronomy: Astronomy
  condition: Condition
}

export interface Wind {
  speed: number
}

export interface Atmosphere {
  humidity: number
}

export interface Astronomy{
  sunrise: any
  sunset: any
}

export interface Condition {
  temperature: number
  text: string
}
