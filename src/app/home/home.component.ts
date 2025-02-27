import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  service = FlightService
}
