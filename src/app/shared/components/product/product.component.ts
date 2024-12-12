import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  producntName:string="samsung";
  productId:number=100;

  fname:string="pavan";
  lname:string="shidole";
  nativeplace:string="her";

  html:string="html";
  ts:string="typescript";

  ng:string="Angular";
  spa:string="single page application";
  js:string="javascript";

  script:string="scripting";

  jsInfo:string="interacting or functionality to create web page"

  constructor() { }

  ngOnInit(): void {
  }

}
