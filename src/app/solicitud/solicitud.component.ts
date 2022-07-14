import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  public solicitudList:any;
  solicitudes:any;

  
  constructor(private solicitudService:SolicitudService) { }

  ngOnInit(): void {
    this.onList();
  }
  onList(){
      this.solicitudService.listarSolicitud().subscribe((solicitudes:any)=>{
      console.log(solicitudes);
      this.solicitudList=solicitudes;
      })
  }
}
