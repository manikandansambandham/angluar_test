import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
   
   isavailable = true;   //variable is set to true


myClickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
   }

   changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
 }

 
}
