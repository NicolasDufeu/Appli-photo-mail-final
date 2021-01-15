import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    
  photoList = [];

  constructor(
    private menu: MenuController,
    private storageService: StorageService

    ) { }
    
    
    openMenu(){
        this.menu.open();
        
    }
 
    
    ngOnInit(){
        
    }
    
    ionViewWillEnter(){
        this.storageService.getFavPhotos().then((fav) =>{
            this.photoList = fav;
            console.log(fav);
            
        })
    }
}
