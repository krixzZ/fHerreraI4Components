import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  users: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers() {
    return this.dataService.getUsers();
  }

  favorite(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  delete(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }
}
