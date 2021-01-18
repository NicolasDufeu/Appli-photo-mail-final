import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { EmailService } from '../../services/email.service';


@Component({
  selector: 'app-details-mail',
  templateUrl: './details-mail.page.html',
  styleUrls: ['./details-mail.page.scss'],
})
export class DetailsMailPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private emailService: EmailService) { }
    
    emailIndex = 0;
    
    emailDetails = this.emailService.data[ this.emailIndex ];
    
    

  ngOnInit() {
      
     
      
      this.activatedRoute.params.subscribe((params) => {

          //on recherche l'index du tableau correspondant à l'id récupéré en parametre
          this.emailIndex = this.emailService.data.findIndex( item => item.id == params.id );
          
          // on doit reaffecter les données de la photo correspondant à l'index
          this.emailDetails = this.emailService.data[ this.emailIndex ];
  
      });
  }

}
