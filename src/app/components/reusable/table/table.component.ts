import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReadingDTO } from '../../../common/ReadingDTO';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public readings = [];
  constructor(private dataService: DataService){ }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataService.getReadings().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: console.log,
    })
  }

}
