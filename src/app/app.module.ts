import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeFormComponent } from './tree/tree-form/tree-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
