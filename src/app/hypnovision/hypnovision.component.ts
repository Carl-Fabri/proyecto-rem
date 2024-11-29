import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hypnovision',
  imports: [],
  templateUrl: './hypnovision.component.html',
  styles: ``
})
export class HypnovisionComponent implements OnInit  {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadScript('./assets/js/hjypnovision.js');
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
}
