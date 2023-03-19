import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  
  imagen:String = "../assets/images/image-web-3-desktop.jpg";
  size:number = 450;
   



  asignarImagen():String{
    let imagen="";
     if(this.size>400){
      console.log('with mayor a 400px')
     }else{

     }
     return imagen;
  }

  
   

}