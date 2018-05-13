import {Component} from '@angular/core';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
    // providers: [AuthenticationApi];
})
export class WelcomePage {
    username:string;
    password:string;
    flag : boolean = false;
    login() {
        if ((this.username == "ABNHFL") && (this.password = "123")){
            this.flag = true;
            console.log("true");
            console.log(this.username);
        }
        else {
            this.flag = true;
            console.log("false");
        }
    }
}
