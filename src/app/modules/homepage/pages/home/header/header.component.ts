import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // signedin = false;
  signedin$ : BehaviorSubject<boolean>

  constructor(private authService : AuthService) {
    this.signedin$ = this.authService.signedin$;
   }

  ngOnInit(): void {
  }
}
