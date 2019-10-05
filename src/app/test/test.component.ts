import { Component, OnInit } from '@angular/core';
import { Regblock } from './regblock'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  newRegblocklock: Regblock;
  chain: any = [];
  constructor() { 
    this.chain=[this.createGenesisBlock()];
    console.log(JSON.stringify(this.chain, null, 7));
  }

  createGenesisBlock() {
    //pass the values in block
    return new Regblock(0,new Date(), "name","age","dob","city","mobno");
  }

  

  ngOnInit() {
  }

}
