import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnChanges {

  @Input() appTest!: string;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.appTest;
  }

}
