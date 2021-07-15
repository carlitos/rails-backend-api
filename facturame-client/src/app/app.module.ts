// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

// Components
import { HomeComponent } from './components/home/home.component'
import { AppComponent } from './app.component';

// Routing 
import { routing } from './app-routing';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
