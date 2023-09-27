import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChanges');

    console.log(changes);
  }

  @Input() title!: string;

  @Output() titleChange = new EventEmitter<string>();

  changeTitle() {

    this.titleChange.emit('new  title from  child!!!');
  }

}
