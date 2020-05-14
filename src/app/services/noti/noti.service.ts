import { Injectable } from '@angular/core';
import { ToastController, ModalController, LoadingController} from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
@Injectable({
  providedIn: 'root'
})
export class NotiService {

  loading:any;
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    private toast: Toast
     
             ) { }
             
  //============  start modals and loaders==============
  async presentToast(message,color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
      mode:"ios"
    
    });
    toast.present();
  }
  
  async presentLoading() {
    this.loading = await this.loadingController.create({     
      mode:"md",
      cssClass:'custom-class custom-loading',
      duration:10000
   
    });
    this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();   
  }
  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
 //============  start modals and loaders==============


 //string generator
 makeid(length:any,name:any) {
  var result           = name;
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

nativeToast(msg){

this.toast.show(msg, '5000', 'center').subscribe(
  toast => {
    console.log(toast);
  }
);
}

}
