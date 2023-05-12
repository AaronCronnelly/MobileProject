import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor() {}
  
  long:number=0;
lat:number=0;
  async getGPS() {
    
      const coordinates = await Geolocation.getCurrentPosition();
      this.long=coordinates.coords.longitude;
      this.lat=coordinates.coords.latitude;
      console.log('Current position:', coordinates);
    
  }
}
