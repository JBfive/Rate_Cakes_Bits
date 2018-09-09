import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
	@Input() cakeToShow: any;
	avg: Number;
  constructor() { }

  ngOnInit() {

  }
  average(){
  	const sum = 0;
  	for(var i = 0; i < this.cakeToShow.rating.length; i++){
  	
  	sum = this.cakeToShow.rating[i].rating + sum
  }
  	const avg = Math.floor(sum / this.cakeToShow.rating.length)
   	return avg;
  }
}
