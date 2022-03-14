import { Component, VERSION, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  @ViewChild('mycontainer', { read: ViewContainerRef }) container;

  async ngAfterViewInit() {
    console.log('Init!', this.container);
  }

}
