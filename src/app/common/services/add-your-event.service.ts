import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AddYourEventPayload } from 'src/app/modules/add-your-event-payload';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AddYourEventService {

  baseUrl = environment.baseUrl;
  private urlAddYourEvent = `${this.baseUrl}api/v1/events/addyourevent`;
//private urlAddYourEvent = 'http://localhost:8080/api/v1/events/addyourevent';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  postAddYourEvent(addYourEventPayload: AddYourEventPayload): Observable<any> {
  //this.http.post(this.urlAddYourEvent, addYourEventPayload, this.httpOptions).subscribe(re => {/* do; */ console.log(re);});
    return this.http.post<AddYourEventPayload>(this.urlAddYourEvent, addYourEventPayload, this.httpOptions)
                    .pipe(catchError(this.handleError));
  }
  
  private handleError(httpError: HttpErrorResponse) {
    const errorText: string = `${httpError.status} | ` + `${httpError.error.error}  | ` + `${httpError.error.message}`;
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error.
      console.error('An error occurred:', errorText);
    } else {
      // A backend error.
      console.error('Backend returned error: ' + errorText);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something gone wrong, please check you input. ' + errorText);
  }

}
