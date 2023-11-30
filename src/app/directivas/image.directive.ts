import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  
  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    // Obtiene la URL de la imagen desde el atributo 'src'
    const imageUrl = this.elem.nativeElement.getAttribute('src');

    const enlargedImage = this.renderer.createElement('img');
    this.renderer.setAttribute(enlargedImage, 'src', imageUrl);
    this.renderer.setStyle(enlargedImage, 'width', '100%');
    this.renderer.setStyle(enlargedImage, 'height', '100%');
    this.renderer.setStyle(enlargedImage, 'position', 'fixed');
    this.renderer.setStyle(enlargedImage, 'top', '0');
    this.renderer.setStyle(enlargedImage, 'left', '0');
    this.renderer.setStyle(enlargedImage, 'background', 'rgba(0, 0, 0, 0.8)');
    this.renderer.setStyle(enlargedImage, 'cursor', 'pointer');

    // Agrega el elemento de imagen ampliado al cuerpo del documento
    this.renderer.appendChild(document.body, enlargedImage);

    // Agrega un evento clic al elemento ampliado para cerrarlo al hacer clic
    this.renderer.listen(enlargedImage, 'click', () => {
      this.renderer.removeChild(document.body, enlargedImage);
    });
  }

}
