import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'yellow';
  @Input() dStyles: {border: string, fontWeight: string, borderRadius: string};

  constructor(private el: ElementRef, private render: Renderer2) {
    // render.setStyle(el.nativeElement, 'color', 'blue');
    // el.nativeElement.style.color = 'red';
    console.log(el);
  }

  @HostListener('click', ['$event.target']) click(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') enter(): void {
    this.render.setStyle(this.el.nativeElement, 'color', this.color);
    this.render.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.render.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.render.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') leave(): void {
    this.render.setStyle(this.el.nativeElement, 'color', null);
    this.render.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.render.setStyle(this.el.nativeElement, 'border', null);
    this.render.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
