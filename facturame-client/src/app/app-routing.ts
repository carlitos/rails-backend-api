import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';

const APP_ROUTER: Routes = [
      { path: '', component: HomeComponent },
      { path: 'new', component: NewExpenseComponent },
]

export const routing = RouterModule.forRoot (APP_ROUTER, { useHash: true })