import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AdMob } from 'ionic-native';

import { TutorialPage } from '../tutorial/tutorial';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sumaRes: number = 0;
  public c5 = 0;
  public c10 = 0;
  public c20 = 0;
  public c50 = 0;
  public p1 = 0;
  public p2 = 0;
  public p5 = 0;
  public p10 = 0;
  public p20 = 0;
  public p50 = 0;
  public p100 = 0;
  public p200 = 0;
  public p500 = 0;
  public p1000 = 0;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
//    let secureStorage: SecureStorage = new SecureStorage();
//    secureStorage.create('primeraVez');
//    secureStorage.get('yaEntro').then(data => console.log(data),
//    error => {secureStorage.set('yaEntro', 'ya');
//              this.navCtrl.setRoot(TutorialPage)});
//    secureStorage.remove('yaEntro');
  }
  
  ionViewDidLoad() {
    AdMob.createBanner({
      adId: 'ca-app-pub-1057257651261369/3806100738',
      isTesting: false,
      autoShow: true
    });
  }
  
  suma(val: number, mult) {
    
    this.sumaRes += val * mult;
    
    switch (val) {
      case 0.05:
        if (mult == 1) {
          this.c5 ++;
        }
        else {
          this.c5 += 10;
        }
        break;
      case 0.10:
        if (mult == 1) {
          this.c10 ++;
        }
        else {
          this.c10 += 10;
        }
        break;
      case 0.20:
        if (mult == 1) {
          this.c20 ++;
        }
        else {
          this.c20 += 10;
        }
        break;
      case 0.50:
        if (mult == 1) {
          this.c50 ++;
        }
        else {
          this.c50 += 10;
        }
        break;
        
      case 1:
        if (mult == 1) {
          this.p1 ++;
        }
        else {
          this.p1 += 10;
        }
        break;
      case 2:
        if (mult == 1) {
          this.p2 ++;
        }
        else {
          this.p2 += 10;
        }
        break;
      case 5:
        if (mult == 1) {
          this.p5 ++;
        }
        else {
          this.p5 += 10;
        }
        break;
      case 10:
        if (mult == 1) {
          this.p10 ++;
        }
        else {
          this.p10 += 10;
        }
        break;
      case 20:
        if (mult == 1) {
          this.p20 ++;
        }
        else {
          this.p20 += 10;
        }
        break;
      case 50:
        if (mult == 1) {
          this.p50 ++;
        }
        else {
          this.p50 += 10;
        }
        break;
      case 100:
        if (mult == 1) {
          this.p100 ++;
        }
        else {
          this.p100 += 10;
        }
        break;
      case 200:
        if (mult == 1) {
          this.p200 ++;
        }
        else {
          this.p200 += 10;
        }
        break;
      case 500:
        if (mult == 1) {
          this.p500 ++;
        }
        else {
          this.p500 += 10;
        }
        break;
      case 1000:
        if (mult == 1) {
          this.p1000 ++;
        }
        else {
          this.p1000 += 10;
        }
        break;
      
      default:
        break;
    }
  }
  
  resta(val: number) {
    switch (val) {
      case 0.05:
        if (this.c5 > 0) {
          this.c5 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 0.10:
        if (this.c10 > 0) {
          this.c10 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 0.20:
        if (this.c20 > 0) {
          this.c20 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 0.50:
        if (this.c50 > 0) {
          this.c50 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
        
      case 1:
        if (this.p1 > 0) {
          this.p1 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 2:
        if (this.p2 > 0) {
          this.p2 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 5:
        if (this.p5 > 0) {
          this.p5 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 10:
        if (this.p10 > 0) {
          this.p10 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 20:
        if (this.p20 > 0) {
          this.p20 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 50:
        if (this.p50 > 0) {
          this.p50 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 100:
        if (this.p100 > 0) {
          this.p100 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 200:
        if (this.p200 > 0) {
          this.p200 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 500:
        if (this.p500 > 0) {
          this.p500 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      case 1000:
        if (this.p1000 > 0) {
          this.p1000 --;
          this.sumaRes -= val;
        }
        else {
          this.toast();
        }
        break;
      
      default:
        break;
    }
  }
  
  toast() {
    let toast = this.toastCtrl.create({
      message: 'Ya no hay!!',
      duration: 2000
    });
    
    toast.present();
  }
  
  refresh() {
    this.sumaRes = 0;
    this.c5 = 0;
    this.c10 = 0;
    this.c20 = 0;
    this.c50 = 0;
    this.p1 = 0;
    this.p2 = 0;
    this.p5 = 0;
    this.p10 = 0;
    this.p20 = 0;
    this.p50 = 0;
    this.p100 = 0;
    this.p200 = 0;
    this.p500 = 0;
    this.p1000 = 0;
  }
  
  tutorial() {
    this.navCtrl.push(TutorialPage);
  }

}
