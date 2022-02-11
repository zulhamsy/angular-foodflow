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
    this.renderer.addClass(this.element, 'bg-violet-600');
    this.renderer.addClass(this.element, 'text-white');
  }
  // isOpen: boolean = false;
  // @HostBinding('class.hidden') isOpen: boolean = false;
  @HostListener('click') toggleOpen(): void {
    // this.isOpen = !this.isOpen;
    this.menu.classList.toggle('hidden');
  }

  // ngOnChanges(): void {
  //   let menu: HTMLElement = this.renderer.nextSibling(this.element);
  //   menu.classList.toggle('hidden', this.isOpen);
  // }

  ngOnInit(): void {
    // let menu = this.element.nextElementSibling;
    this.menu = this.renderer.nextSibling(this.element);
    // if (menu instanceof HTMLUListElement || menu instanceof HTMLOListElement) {
    //   // menu.classList.remove('hidden');
    //   menu.classList.toggle('hidden');
    // } else {
    //   throw TypeError('Sibling is not List Element');
    // }
  }
}
