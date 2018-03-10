import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public platform: Platform,
              public actionSheetController: ActionSheetController,
              public alertCobtroller: AlertController) {

  }


  openMenu(){
    let alertController = this.alertCobtroller.create();
    let menu = this.actionSheetController.create({
      title: 'Album',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: function () {
            alertController.setTitle('Apagar Informacao');
            alertController.setMessage('Tem certeza que deseja apagar a informacao?');
            alertController.addButton({text: 'Nao', handler: ()=> {} });
            alertController.addButton({text: 'Sim', handler: ()=> {alert('Apagado')}});
            alertController.present();
          }
        },
        {
          text: 'Informacoes',
          handler: ()=> {
            alertController.setTitle('Ver Informacoes');
            alertController.setSubTitle('Subtitulo da info');
            alertController.setMessage('Esta informacao informa que a infoemacao foi mostrada num alert.');
            alertController.addButton('Okay');
            alertController.present();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            alertController.setTitle('Cancelamento');
            alertController.setMessage('Informe o motivo do cancelamento');
            alertController.addInput({name: 'motivo', placeholder: ''});
            alertController.addButton({text: 'ENVIAR', role: 'cancel', handler: ()=> {}});
            alertController.present();
          }
        }
      ]
    });

    menu.present();
  }


}
