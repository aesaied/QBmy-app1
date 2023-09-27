import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight!: string;
  @Input() isBold: boolean = true;

  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;

    this.el.nativeElement.style.fontWeight = this.isBold ? 'bold' : 'normal';

    console.log(this.appHighlight);

  }



}
