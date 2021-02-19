import { Component } from '@angular/core'
import { Weather } from '../../app.component'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  weather: Weather = {
    city: "",
    conditions: "",
    humidity:"",
    temperaturestring:"",
    temperature: null,
    celciusstring:null,
    icon: ""
  }
  update(weather: Weather) { 
    this.weather = weather 
  }
}
