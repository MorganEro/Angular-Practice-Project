import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gigabytesToMegabytes',
})
export class GigabytesToMegabytesPipe implements PipeTransform {
  transform(value: number): number {
    const megabytes = 1024;
    if (!isNaN(value)) {
      return value * megabytes;
    }
    return 0;
  }
}
