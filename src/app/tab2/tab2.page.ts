import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
    photoList = [];

  constructor(
    private photoService: PhotosService,
    private storageService: StorageService
    ) {}
    
  ngOnInit(){
        
  }
    
  ionViewWillEnter(){
       
        this.photoList = this.photoService.data;
 
    }
    
    alert(id){
        alert(id);
    }

}
