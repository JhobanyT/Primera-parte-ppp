import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavixoComponent } from './navixo/navixo.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { PersonComponent } from './person/person.component';
import { MoreComponent } from './more/more.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ClinicaAmericanaComponent } from './clinica-americana/clinica-americana.component';
import { PruebaComponent } from './htm/prueba/prueba.component';
import { HospitalcmmComponent } from './hospitalcmm/hospitalcmm.component';
import { UgelComponent } from './ugel/ugel.component';
import { CatComponent } from './cat/cat.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavixoComponent,
    PersonComponent,
    MoreComponent,
    InformacionComponent,
    ClinicaAmericanaComponent,
    PruebaComponent,
    HospitalcmmComponent,
    UgelComponent,
    CatComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
