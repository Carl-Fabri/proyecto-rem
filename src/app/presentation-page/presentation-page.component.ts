import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-page.component.html',
  styleUrl: './presentation-page.component.css'
})
export class PresentationPageComponent {
  textos: string[] = [
    'Estas a punto de ingresar a un experimento sin precedentes',
    'Aquí tus sueños no son los tuyos sino parte de un vasto entramado de mentes conectadas',
    '¿Estas listo para explorar lo inexplorado y ser parte de este experimento onírico?'
  ];
  indiceActual: number = 0;
  isFinalText: boolean = false;

  get textoActual(): string {
    return this.textos[this.indiceActual];
  }

  changeInformation(): void {
    if (this.indiceActual < this.textos.length -1) {
      this.indiceActual++;
    } else {
      this.isFinalText = true;
    }
  }



}
