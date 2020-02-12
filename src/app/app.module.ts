import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import {DescriptionsService} from './services/descriptions.service';
import {TreeCoreComponent} from './components/branch-core/tree-core.component';

@NgModule({
  declarations: [
    AppComponent,
      TreeCoreComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AgmCoreModule.forRoot({
        apiKey: ''
    })
  ],
  providers: [DescriptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
