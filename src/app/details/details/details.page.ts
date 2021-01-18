import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    //on recup la route active pour le parametre id / et notre photos service
  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotosService,
    private storageService: StorageService) { }

    //on definie l'index du tableau à 0
    photoIndex = 0;
    //on declare note element pour l'utiliser dans la page details
    photoDetails = this.photoService.data[ this.photoIndex ];
    
    addedToFav = false;

    async addToFavorites(){
        //check tableau des favoris
        let data = await this.storageService.getFavPhotos();
        //on charge le tableau dans un conteneur
        //on verifie si les fav sont null ou non
        if (!data) data = [];
        //on ajoute dans le tableau avec un push
        data.push(this.photoDetails);
        //je mets a jour les données des favoris
        this.storageService.setFavPhotos(data);
        this.addedToFav = true;
        console.log(data);
    }
    
    async removeFromFav(id){
        const index = await this.storageService.getFavById(id);
        const data = await this.storageService.getFavPhotos();
        data.splice(index,1);
        this.storageService.setFavPhotos(data);
        this.addedToFav = false;
        console.log('remove from fav : ', data);
    }


  ngOnInit() {
      this.activatedRoute.params.subscribe((params) => {

          //on recherche l'index du tableau correspondant à l'id récupéré en parametre
          this.photoIndex = this.photoService.data.findIndex( item => item.id == params.id );
          
          // on doit reaffecter les données de la photo correspondant à l'index
          this.photoDetails = this.photoService.data[ this.photoIndex ];
          
          // on recherche si cette photo est présente dnas les favoris
          this.storageService.getFavById( params.id ).then((index) => {
              console.log('La photo est dans les favoris ? : ', index);
              if (index!=-1) this.addedToFav = true;
          })
  
      });
  }
    
}
