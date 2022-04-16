import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subscriber-footer',
  templateUrl: './subscriber-footer.component.html',
  styleUrls: ['./subscriber-footer.component.scss']
})
export class SubscriberFooterComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
 
  }


}
