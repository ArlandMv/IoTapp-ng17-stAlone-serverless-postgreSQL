import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components } from '../../../common/components';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent {
  components = components.filter((component) => !!component.card);

  constructor() {
    console.log(components);
  }
}
