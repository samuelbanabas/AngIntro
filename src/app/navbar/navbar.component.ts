//import angular component from angular core
import { Component } from '@angular/core';

// create the component decorator
@Component({
  //selector is the name of the component
  selector: 'app-navbar',

  //html template for the component
    template:'<h1>Navbar Component</h1>'
})

//create navbar component class and export it
export class NavbarComponent {
  //title = 'AngIntro';
}
