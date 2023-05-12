import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private http:HttpClient) {}
  
  long:number=0;
lat:number=0;
  async getGPS() {
    
      const coordinates = await Geolocation.getCurrentPosition();
      this.long=coordinates.coords.longitude;
      this.lat=coordinates.coords.latitude;
      console.log('Current position:', coordinates);
    
  }

  movies: any[] = [];
  ionViewWillEnter() {
    this.getMovieData().subscribe(
      (data) => {
        this.movies = data.Search
      }
    )
  }
  getMovieData(): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?apikey=fab8825c&s=%27war');
  }
}
