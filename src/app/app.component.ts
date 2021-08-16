import { Component } from '@angular/core';
import { SMS } from './sms';
import { SmsService } from './sms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMSExample';
  sms:SMS=new SMS();
  constructor(private smsService:SmsService){}
  sendSMS(){
    //alert(JSON.stringify(this.sms));
    this.smsService.smsSending(this.sms).subscribe(res=>{
     // alert(JSON.stringify(res));
      console.log(res);
    })
  }
}
