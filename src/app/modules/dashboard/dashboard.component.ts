import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  // signedin = false;
  isLoading = false;
  username = "Samuel";
  userProfile = "./assets/images/placeholder.png";


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
   this.loggedIn();
  }

  
  links = [
    { path: "your-posts", icon: "business", title: "Your Posts" },
    { path: "post-job", icon: "work", title: "Post Job" },
    { path: "profile", icon: "account_circle", title: "Profile" }
  ];

 

  loggedIn() {
    this.authService.getCurrentUser().subscribe((res : any) => {
    //  console.log(res?.data.username);
     this.username = res?.data.username;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
