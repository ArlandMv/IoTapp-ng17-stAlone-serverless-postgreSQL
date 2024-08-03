import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { components } from '../../../common/components';
import { TableComponent } from '../../reusable/table/table.component';
import { AuthService } from '../../../services/auth.service';
import { DataService } from '../../../services/data.service';

import { IoTReading } from '../../../common/IoTReading';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxSpinnerModule, TableComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  readings: IoTReading[] = [];
  deviceTag: string = 'your-device-tag';
  //components = components.filter((component) => !!component.card);
  boards: any[] = []; //later board functionality

  constructor(
    private auth: AuthService,
    private dataService: DataService,
    //private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.fetchReadings();
    //wait 3 seconds
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    console.log(this.readings);
  }

  async fetchReadings() {
    this.readings = await this.dataService.getAllReadings();
  }

  async fetchReadingsById(deviceId: string) {
    this.readings = await this.dataService.getReadingsById(deviceId);
  }
}
