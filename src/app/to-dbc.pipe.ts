import { Pipe, PipeTransform } from '@angular/core';

/**
 * 轉全形字元
 */

@Pipe({
  name: 'toDbc'
})
export class ToDbcPipe implements PipeTransform {

  transform(value: string): string {
    var result = "";
    for (var i = 0; i < value.length; i++) {
      if (value.charCodeAt(i) == 32) {
        result = result + String.fromCharCode(12288);
      }
      if (value.charCodeAt(i) < 127) {
        result = result + String.fromCharCode(value.charCodeAt(i) + 65248);
      }
    }
    return result;
  }

}
