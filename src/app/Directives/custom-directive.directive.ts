import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  @Input()
  lowercase: boolean = false;

  constructor(private ele: ElementRef) { }

  @HostListener("click")
  mouseclick() {
    if (this.lowercase === false) {
      this.ele.nativeElement.style.fontSize = "22px";
      this.ele.nativeElement.style.color = "red";
    }
    else {
      this.ele.nativeElement.style.fontSize = "16px";
      this.ele.nativeElement.style.color = "black";
    }
    this.lowercase = !this.lowercase;
  }

}
