import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	cakes: any = [];
  	shows: any = null;
  	newCakes: any;
  	editCakes: any;

	constructor(private _httpService:HttpService){}

	ngOnInit(){
		this.getCakesFromService();
		this.newCakes = {baker: "", img: ""}
		this.editCakes = {comment: "", rating: ""}
	}
	getCakesFromService(){ 
		let observable = this._httpService.getCakes()
		observable.subscribe(data=> {
			
			this.cakes = data;
			
			// for(let c of this.cakes){
			// 	c.rating = null;
			// 	c.comment = null;
			// }
		})

	}
	show(id: any){
		let observable = this._httpService.getACakes(id)
		observable.subscribe(data=>{
			this.shows = data;
			
		})
	}

	edit(id: any, updatedTask){
		
		let observable = this._httpService.editCakes(id, updatedTask);
		
		observable.subscribe(data=> {
		
			this.getCakesFromService()
		})
	}

	onSubmit(){
		let observable = this._httpService.addCakes(this.newCakes);
		observable.subscribe(data=> {
			
			this.newCakes = {baker: "", img: ""}
			this.getCakesFromService()
		})
	}
}
