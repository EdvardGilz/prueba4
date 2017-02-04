import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

/*
  Generated class for the Tutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  mySlideOptions = {
    pager: true
  };

  constructor(public navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
