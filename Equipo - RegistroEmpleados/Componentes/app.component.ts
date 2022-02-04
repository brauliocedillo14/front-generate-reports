import { Component } from '@angular/core';
import { ServicesClienteService} from './services-cliente.service';
import  {Welcome,NumeroEmpleado} from './Interfaces/ICliente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  public ICliente!:Welcome;
  public IEmpleaod!:NumeroEmpleado;


  constructor(public api:ServicesClienteService) {

  }
  public  ValidarCampos():void{
    const correo = (document.getElementById("txtCorroe") as HTMLInputElement).value;
    localStorage.removeItem('datos');
    this.api.ObtenerCliente(correo).subscribe((res:Welcome)=>{
      console.log(res.datos[0].email);
        if(res.datos[0].email === undefined){
          alert("Usuario No Existe");
        }
        this.ICliente=res;
        localStorage.setItem('datos',JSON.stringify(this.ICliente));
    });
  }
  public EnviarCorreo():void{
   // this.ICliente=JSON.parse(localStorage.getItem('datos') || '');
    const nempelado = (document.getElementById("txtCorroe") as HTMLInputElement).value;
    this.IEmpleaod={
      NEmpleado:nempelado
    }
    this.api.ActualizarEmpleado(this.IEmpleaod).subscribe();
    alert('Actualizado Correctamente');
  }
}
