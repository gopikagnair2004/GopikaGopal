import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = 'ff9e0e6947c71d181ae9cdffb59a4b97' 
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
