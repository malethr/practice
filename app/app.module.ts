import { NgModule }      from '@angular/core'; // imports general module code from the Angular framework's core
import { BrowserModule } from '@angular/platform-browser'; // import code necessary to run our app in the browser, has built-in directives
import { AppComponent }   from './app.component'; // refers to our rootcomponent we created
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ], // array of other modules and content this module requires. here we import built-in module called browsermodule
  declarations: [ AppComponent ], // is an array of all components that will reside in this module
  bootstrap:    [ AppComponent ] // refers to launching an application with minimum required resources
})

  export class AppModule {

  }
