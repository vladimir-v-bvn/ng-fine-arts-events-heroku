import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {SignupPayload} from "../auth/signup-payload";
import {LoginPayload} from "../auth/login-payload";
import {catchError, map} from 'rxjs/operators';
import {JwtAuthResponse} from '../auth/jwt-auth-response';
import {LocalStorageService} from 'ngx-webstorage';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  private urlLogin = `${this.baseUrl}api/v1/auth/login`;
  private urlSignup = `${this.baseUrl}api/v1/auth/signup`;

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  signup(signupPayload: SignupPayload): Observable<any> {
  //this.http.post(this.urlSignup, signupPayload, this.httpOptions).subscribe(re => console.log("SU " + re));
    return this.http.post(this.urlSignup, signupPayload, this.httpOptions).pipe(catchError(this.handleError));
  }
 
  login(loginPayload: LoginPayload): Observable<any> {
  //this.http.post(this.urlLogin, LoginPayload, this.httpOptions).subscribe(re => console.log("LI " + re));
  //return this.http.post(this.urlLogin, loginPayload);
    this.localStorageService.store('userName', '');
    this.localStorageService.store('authenticationToken', '');
    return this.http.post<JwtAuthResponse>(this.urlLogin, loginPayload, this.httpOptions)
                    .pipe(map(data => {
                      this.localStorageService.store('userName', data.userName);
                      this.localStorageService.store('authenticationToken', data.authenticationToken);
                      }),
                      catchError(this.handleError)
                    );
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

  isAuthenticated(): Boolean {
    return this.localStorageService.retrieve('userName') != null;
  }

  logout() {
    this.localStorageService.clear('userName');
    this.localStorageService.clear('authenticationToken');
  }

}
