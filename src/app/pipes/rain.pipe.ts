import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rain",
})
export class RainPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value <= 2) {
      return "Lluvias débiles";
    } else if (value <= 15) {
      return "Lluvias moderadas";
    } else if (value <= 30) {
      return "Lluvias fuertes";
    } else if (value <= 60) {
      return "Lluvias muy fuertes";
    } else {
      return "Lluvias torrenciles";
    }
  }
}
