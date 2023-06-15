import {
  Directive,
  Input,
  HostListener,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
//add "open" class
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  // dropdownToggle(eventData: Event) {}
}
