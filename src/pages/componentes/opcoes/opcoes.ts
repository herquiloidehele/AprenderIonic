import { Component } from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the OpcoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public actionSheetController: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcoesPage');
  }

  openMenu(){
    let alertController = this.alertController.create();
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
