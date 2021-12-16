import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toASCII'
})
export class ToASCIIPipe implements PipeTransform {

  transform(value: string): unknown {
    return toASCII(value);
  }

}

function toASCII(chars: string) {
  var ascii = '';
  for(var i=0, l=chars.length; i<l; i++) {
      var c = chars[i].charCodeAt(0);
      //只針對半形去轉換
      if (c >= 0xFF00 && c <= 0xFFEF) {
          c = 0xFF & (c + 0x20);
      }
      ascii += String.fromCharCode(c);
  }
  return ascii;
}
