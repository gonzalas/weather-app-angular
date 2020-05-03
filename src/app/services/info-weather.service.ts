import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InfoWeatherService {
  apiKey: string = "0c320c15277f5928a2f7320a26c66ed9";

  constructor(private http: HttpClient) {}

  getActualWeather(quest: string) {
    const URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=${quest}&units=metric&lang=es`;
    return this.http.get(URI);
  }

  getForecastWeather(quest: string) {
    const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${quest}&appid=${this.apiKey}&units=metric&lang=es`;

    return this.http.get(URI);
  }
}
