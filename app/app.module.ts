import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { ParentComponent } from "./service/parent.component";
import { CmpAComponent } from "./service/cmp-a.component";
import { CmpBComponent } from "./service/cmp-b.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent,
        ParentComponent,
        CmpAComponent,
        CmpBComponent
         ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
