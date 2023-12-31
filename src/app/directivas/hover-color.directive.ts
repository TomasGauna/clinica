import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter')
    onMouseEnter()
    {
      this.cambiarColor('blue');
    }

    @HostListener('mouseleave')
    onMouseLeave()
    {
      this.cambiarColor('white');
    }

  cambiarColor(color: string)
  {
    this.elem.nativeElement.style.color = color;
  }
}
