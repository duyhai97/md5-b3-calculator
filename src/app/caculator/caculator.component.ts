import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  // get a(): number {
  //   return this._a;
  // }
  //
  // set a(value: number) {
  //   this._a = value;
  // }
  //
  // get b(): number {
  //   return this._b;
  // }
  //
  // set b(value: number) {
  //   this._b = value;
  // }

    a = 0
    b = 0;
  result = 0;


  // constructor(a: number, b: number, result: number) {
  //   this.a = a;
  //   this.b = b;
  //   this.result = result;
  // }

  public Tinhtoan(type: String){

    switch (type){
      case 'cong':
        this.result = this.a + this.b
        break
      case 'tru':
        this.result = this.a - this.b
        break
      case 'nhan':
        this.result = this.a * this.b
        break
      case 'chia':
        this.result = this.a / this.b
        break

    }

  }

  ngOnInit(): void {
  }

}
