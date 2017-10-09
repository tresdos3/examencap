import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cortar'
})
export class CortarPipe implements PipeTransform {
  Retornar: String;
  transform(text: string, param: string): any {
    if(!param){
      this.Retornar = text;
    }
    else{
      if(Number(param))
        this.Retornar = text.substring(0, parseInt(param))
      else
        this.Retornar = "Por fabor agrege un numero"
    }
    return this.Retornar;
  }

}
