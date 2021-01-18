import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-mail',
  templateUrl: './list-item-mail.component.html',
  styleUrls: ['./list-item-mail.component.scss'],
})
export class ListItemMailComponent implements OnInit {
    
  @Input() img : any;

  constructor() { }

  ngOnInit() {}

}
