import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private render: Renderer2) {
    // render.setStyle(el.nativeElement, 'color', 'blue');
    // el.nativeElement.style.color = 'red';
    console.log(el);
  }

  @HostListener('click', ['$event.target']) click(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') enter(): void {
    this.render.setStyle(this.el.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave') leave(): void {
    this.render.setStyle(this.el.nativeElement, 'color', null);
  }
}
