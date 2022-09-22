//Example of Inheritance an Encapsulation
'use strict'

class Car {
    constructor(brand,year) {
      this.carname = brand;
      this.caryear = year;
    }
    present() {
      return 'Marka : ' + this.carname;
    }
    year(){
        return " || Burxalis ili :" + this.caryear;
    }
  }
  
  class Model extends Car {
    constructor(brand, year, mod) {
      super(brand,year,mod);
      this.model = mod;
    }
    show() {
      return this.present() + this.year() + ' || Markasi : ' + this.model;
    }
  }
  
  var myCar = new Model("Mercedes","1998", "E240(dordgoz-w210)");
  document.getElementById("salam").innerHTML = myCar.show();

  var myCar2 = new Model("BMW","2015", "f10");
  document.getElementById("aleykum").innerHTML = myCar2.show();
