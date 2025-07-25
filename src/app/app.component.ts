import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
    selector: 'app-root', //use this element to identify where this component should be rendered in the app
    templateUrl: './app.component.html', // use this file as the template for this component
    styleUrls: ['./app.component.css'], // use this file for the styles of this component
    standalone: true, // this component is standalone, meaning it can be used without being declared in an NgModule
    imports: [RouterOutlet, TopBarComponent] // import the RouterOutlet and TopBarComponent to use them in this component
})

// The AppComponent is the root component of the application
// It is the entry point of the application and is rendered in the index.html file
export class AppComponent {
}
