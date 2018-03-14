import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController, Platform} from 'ionic-angular';
import {BotoesPage} from "../componentes/botoes/botoes";
import {CheckboxPage} from "../componentes/checkbox/checkbox";
import {OpcoesPage} from "../componentes/opcoes/opcoes";
import {FloatButtonsPage} from "../componentes/float-buttons/float-buttons";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public platform: Platform, public navController: NavController,
              public actionSheetController: ActionSheetController,
              public alertCobtroller: AlertController) {

  }


  onClickOpcao(opcao){
    switch (opcao){
      case 'botoes': this.navController.push(BotoesPage); break;
      case 'checkbox': this.navController.push(CheckboxPage); break;
      case 'opcoes': this.navController.push(OpcoesPage); break;
      case 'floatButtons': this.navController.push(FloatButtonsPage); break;
      default: {
        let alertController = this.alertCobtroller.create();
        alertController.setTitle('Informacao');
        alertController.setMessage('Esta opcao ainda nao esta disponivel');
        alertController.addButton({
          text: 'Okay',
        });
        alertController.present();
      }break;

    }
  }


}
