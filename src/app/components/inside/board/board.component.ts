import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { components } from '../../../common/components';
import { TableComponent } from '../../reusable/table/table.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxSpinnerModule, TableComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  components = components.filter((component) => !!component.card);

  constructor(
    //private auth: AuthService,
    //private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    //console.log('BoardComponent constructor');
  }

  ngOnInit(): void {
    this.spinner.show();
    //wait 3 seconds
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
