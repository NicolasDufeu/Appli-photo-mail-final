import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    
  emailList= [];

  constructor(private emailService: EmailService,
              private storageService: StorageService) { }
    

    
   ngOnInit(){

    }
    
    ionViewWillEnter(){
       
        this.emailList = this.emailService.data;
        console.log('test : ', this.emailList);
 
    }
    
    alert(id){
        alert(id);
    }

}
