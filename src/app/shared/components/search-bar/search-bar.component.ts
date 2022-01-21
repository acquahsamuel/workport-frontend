import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();
  

  onSearch(value: string) { 
    console.log('Search term')
  }

  constructor() { }

  ngOnInit(): void {
     this.loading()
  }

  public loading(){
    console.log('Helllo orld');
  }


}
