import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { DisplayComponent } from './components/display/display.component'
import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './services/weatherdata.service'
import { FormsModule } from '@angular/forms'
import { SelectionComponent } from './components/selection/selection.component'
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }