import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  @ViewChild('divElement') card: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
