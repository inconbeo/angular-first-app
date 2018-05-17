import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class AddConsultantService {
     http: Http;
    // messageIsEdit = new EventEmitter<Message>();

    constructor(http: Http) {
      this.http = http;
    }

    addConsultant(consultant) {
      // console.log('Adddddddddd', consultant)
        const body = JSON.stringify(consultant);
        console.log(body)
        const headers = new Headers({'Content-Type': 'application/json'});
        // const token = localStorage.getItem('token')
        //     ? '?token=' + localStorage.getItem('token')
        //     : '';
        return this.http.post('http://localhost:8080/api/consultants/save', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                console.log('HAHAHA', result)
                return result
            })
            // .subscribe();
    }
}
