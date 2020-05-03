import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "wind",
})
export class WindPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0 && value < 40 && value > 330) {
      return "Norte";
    } else if (value < 120) {
      return "Este";
    } else if (value < 220) {
      return "Sur";
    } else {
      return "Oeste";
    }
  }
}
