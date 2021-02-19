import { Component } from '@angular/core'
export class Weather { 
  city: String 
  conditions: String 
  humidity:String
  temperaturestring: String
  temperature: number 
  celciusstring:string
  icon: String 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
}