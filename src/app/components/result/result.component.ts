import { Component, OnInit, Input } from "@angular/core";
import { Data } from "src/app/interfaces/data";
import { InfoWeatherService } from "src/app/services/info-weather.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  @Input() questSearch: Data;
  @Input() forecast: any[];

  constructor(public infoService: InfoWeatherService) {}

  ngOnInit(): void {
    const lastSearch = localStorage.getItem("data");
    this.questSearch = JSON.parse(lastSearch);
  }
}
