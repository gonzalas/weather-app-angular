import { Component, OnInit, Input, Output } from "@angular/core";
import { InfoWeatherService } from "src/app/services/info-weather.service";
import { Data } from "src/app/interfaces/data";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  quest: string = "";
  questSearched: Data;
  forecast: any[];
  constructor(public infoService: InfoWeatherService) {}

  ngOnInit(): void {
    const oldData = localStorage.getItem("data");
    this.quest = oldData.replace(/['"]+/g, "");
    this.searchData();
  }

  searchData() {
    this.infoService.getActualWeather(this.quest).subscribe(
      (resp: Data) => {
        this.questSearched = resp;

        //Store last quest
        localStorage.setItem("data", JSON.stringify(this.questSearched.name));

        //Clean input
        document.querySelector("input").value = "";
      },
      (err) => console.log(err)
    );

    this.infoService.getForecastWeather(this.quest).subscribe(
      (resp: any[]) => {
        this.forecast = resp;
        console.log(resp);
      },
      (err) => console.log(err)
    );
  }
}
