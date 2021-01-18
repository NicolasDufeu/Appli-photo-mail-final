import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    
    public data = [
    {
        id: 40,
        url:'../../assets/photos/teteH.jpg',
        title: 'Bonne année',
        emetteur: 'Michel',
        mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus nec semper euismod. Praesent et mattis augue, at malesuada elit. Fusce id massa feugiat augue bibendum mollis. Sed tristique turpis erat, vel fringilla sem pulvinar nec. Etiam ac tincidunt nulla. Suspendisse molestie varius interdum. Sed bibendum neque vitae volutpat.'
    },
    {
        id: 56,
        url:'../../assets/photos/teteH.jpg',
        title: 'Bonne année',
        emetteur: 'Arthur',
        mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate ullamcorper urna, et semper purus semper nec. Aliquam suscipit, nunc sit amet convallis mollis, purus tortor dictum ipsum, vitae rutrum magna felis et enim. Nunc suscipit nibh purus, ac hendrerit purus eleifend non. Nam et egestas orci. Aenean pharetra lacus.'
    },
    {
        id: 88,
        url:'../../assets/photos/teteF.jpg',
        title: 'Marie',
        emetteur: 'Michel',
        mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus nec semper euismod. Praesent et mattis augue, at malesuada elit. Fusce id massa feugiat augue bibendum mollis. Sed tristique turpis erat, vel fringilla sem pulvinar nec. Etiam ac tincidunt nulla. Suspendisse molestie varius interdum. Sed bibendum neque vitae volutpat.'
    },
    {
        id: 7,
        url:'../../assets/photos/teteH.jpg',
        title: 'Confinement',
        emetteur: 'E.M',
        mail: 'Bonne chance'
    },
    {
    id: 40,
    url:'../../assets/photos/teteH.jpg',
    title: 'Bonne année',
    emetteur: 'Michel',
    mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate ullamcorper urna, et semper purus semper nec. Aliquam suscipit, nunc sit amet convallis mollis, purus tortor dictum ipsum, vitae rutrum magna felis et enim. Nunc suscipit nibh purus, ac hendrerit purus eleifend non. Nam et egestas orci. Aenean pharetra lacus.'
    },
    {
    id: 56,
    url:'../../assets/photos/teteH.jpg',
    title: 'Bonne année',
    emetteur: 'Arthur',
    mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus nec semper euismod. Praesent et mattis augue, at malesuada elit. Fusce id massa feugiat augue bibendum mollis. Sed tristique turpis erat, vel fringilla sem pulvinar nec. Etiam ac tincidunt nulla. Suspendisse molestie varius interdum. Sed bibendum neque vitae volutpat.'
    },
    {
    id: 88,
    url:'../../assets/photos/teteF.jpg',
    title: 'Marie',
    emetteur: 'Michel',
    mail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate ullamcorper urna, et semper purus semper nec. Aliquam suscipit, nunc sit amet convallis mollis, purus tortor dictum ipsum, vitae rutrum magna felis et enim. Nunc suscipit nibh purus, ac hendrerit purus eleifend non. Nam et egestas orci. Aenean pharetra lacus.'
    },
    {
        id: 7,
        url:'../../assets/photos/teteH.jpg',
        title: 'Confinement',
        emetteur: 'E.M',
        mail: 'Bonne chance'
    }
        
  ];

  constructor() { }
}
