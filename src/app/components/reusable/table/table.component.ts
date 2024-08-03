import { Component, Input, input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReadingDTO } from '../../../common/ReadingDTO';
import { DataService } from '../../../services/data.service';
import { IoTReading } from '../../../common/IoTReading';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) readings!: IoTReading[];
  //reading = input<IoTReading>();
}
