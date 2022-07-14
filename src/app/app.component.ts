import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'material';
  showFiller = false;
  
  @ViewChild('carousel') carousel!: MdbCarouselComponent;

  constructor() {}

  onSlideChange(): void {
    console.log('slide change');
  }

  ngAfterViewInit(): void {
    this.carousel.stop();
  }
}
