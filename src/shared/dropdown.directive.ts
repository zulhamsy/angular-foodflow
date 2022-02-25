import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[app-dropdown]',
})
export class DropdownDirective implements OnInit {
  private element: HTMLElement;
  private menu: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = this.el.nativeElement;
    // element.classList.add('bg-violet-600', 'text-white');
    // Using Renderer
    // this.renderer.addClass(this.element, 'bg-violet-600');
    // this.renderer.addClass(this.element, 'text-white');
  }

  @HostListener('click') toggleOpen(): void {
    this.menu.classList.toggle('hidden');
  }

  // Ketika menu 'open' dan selain button diklik maka menu akan 'closed'
  @HostListener('window:click', ['$event']) toggleClose(event: Event): void {
    if (
      event.target != this.element &&
      !this.menu.classList.contains('hidden')
    ) {
      this.menu.classList.add('hidden');
    }
  }

  // ketika initialization, menu akan berisi element ul/ol yang akan ditoggle class 'hidden' nya saat button diclick
  ngOnInit(): void {
    this.menu = this.renderer.nextSibling(this.element);
    if (
      this.menu instanceof HTMLUListElement == false &&
      this.menu instanceof HTMLOListElement == false
    ) {
      throw TypeError('Element Menu bukan UL atau OL');
    }
  }
}
