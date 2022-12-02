import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  constructor(private ref:ElementRef) {
    this.ref.nativeElement.style.backgroundColor = 'yellow'
  }

}
