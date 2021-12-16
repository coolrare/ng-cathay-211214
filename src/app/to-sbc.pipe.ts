import { Pipe, PipeTransform } from '@angular/core';

/**
 * 轉半形字元
 */

@Pipe({
  name: 'toSbc'
})
export class ToSbcPipe implements PipeTransform {

  transform(value: string): string {
    var result = "";
    var len = value.length;
    for (var i = 0; i < len; i++) {
      var cCode = value.charCodeAt(i);
      //全形與半形相差（除空格外）：65248（十進位制）
      cCode = (cCode >= 0xFF01 && cCode <= 0xFF5E) ? (cCode - 65248) : cCode;
      //處理空格
      cCode = (cCode == 0x03000) ? 0x0020 : cCode;
      result += String.fromCharCode(cCode);
    }
    return result;
  }

}
