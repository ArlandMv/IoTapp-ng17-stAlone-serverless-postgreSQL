import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/inside/board/board.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'workspace',
    component: BoardComponent,
  },
  {
    path: 'workspace/:id',
    component: BoardComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
