import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http:HttpClient) { }
  smsSending(smsData:Object):Observable<Object>{
    return this.http.post(`http://localhost:8080/SMSMessage/smsExample/sms`,smsData);
  }
}
