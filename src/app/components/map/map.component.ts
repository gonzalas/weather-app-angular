import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { environment } from "src/environments/environment";
import * as Mapboxgl from "mapbox-gl";
import { Data } from "@angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnChanges {
  @Input() query: Data;
  map: Mapboxgl.Map;

  ngOnInit() {
    this.showMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query.previousValue != undefined) {
      if (changes.query.currentValue != changes.query.previousValue) {
        this.map.remove();
        this.showMap();
      }
    }
  }

  showMap() {
    Mapboxgl.accessToken = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.query.coord.lon, this.query.coord.lat], // starting position
      zoom: 10, // starting zoom
    });
  }
}
