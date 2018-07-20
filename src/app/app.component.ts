import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // Do not set page here
  rootPage:any;
  loader: any;
 
  constructor(public loadingCtrl: LoadingController, public storage: Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Now the native side is ready. Let's set the page.
      this.presentLoading();
      this.storage.get('introShown1111').then((result) => {
 
        if(result){
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();

      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }




}