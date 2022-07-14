import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { PersonComponent } from './person/person.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ClinicaAmericanaComponent } from './clinica-americana/clinica-americana.component';
import { HospitalcmmComponent } from './hospitalcmm/hospitalcmm.component';
import { UgelComponent } from './ugel/ugel.component';
import { CatComponent } from './cat/cat.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
  { path: 'informacion', component: InformacionComponent },
  { path: 'clinica-americana', component: ClinicaAmericanaComponent },
  { path: 'hospital-cmm', component: HospitalcmmComponent },
  { path: 'ugel-sr', component: UgelComponent },
  { path: 'cat', component: CatComponent },
  { path: 'solicitud', component: SolicitudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
