import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EventsService{
	
	constructor(private http: Http){}

	eventList(){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/eventList')
		.map(
			(response: Response) => {
				return response.json().events;
			}
		);
	}

	getEvent(id: number){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/getEvent/'+id)
		.map(
			(response: Response) => {
				return response.json().event;
			}
		);
	}

}