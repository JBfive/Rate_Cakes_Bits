import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  	getCakes(){

		// let tempObservable = this._http.get('/tasks');

		// tempObservable.subscribe(data=> console.log('This is magic!', data));
		return this._http.get('/api/cakes')
	}
	getACakes(id){
	 	// let tempObservable = this._http.get('/cakes/'+id)

	 	// tempObservable.subscribe(data=> console.log('More magic!', data));
		return this._http.get('/api/cakes/'+id)
	}
	
	addCakes(newCake){
	return this._http.post('/api/cakes', newCake)
	}
	
	editCakes(id, editCake){
		
		return this._http.put('/api/cakes/'+id, editCake)
	}
}
