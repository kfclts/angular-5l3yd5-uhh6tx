import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() productchild!: Product; // Parent(app-product-list) to child(this one)

  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
