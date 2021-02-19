import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  
  weather: Weather = new Weather()
  city: String = ""
  constructor(private weatherData: WeatherDataService) { }
  submit() {
    this.weatherData.load(this.selectedCity).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = 'Condition:'+data['weather'][0]['main']
      this.weather.humidity = 'Humidity:'+data['main']['humidity']+'%'
      this.weather.temperaturestring='Current Temparature:'
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15))
      this.weather.celciusstring= 'C'
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }
  selectedCity: string = '';

  selectChangeHandler (event: any) {

    this.selectedCity = event.target.value;
}
}