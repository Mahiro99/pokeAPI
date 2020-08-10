import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CatchEmService } from '../catch-em.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  catchService: CatchEmService;
  constructor(private catchEmService: CatchEmService) {
    this.catchService = catchEmService;
  }

  ngOnInit(): void {
  }

  onSearch(event: any){
    if (event.keyCode === 13 ){
      this.catchEmService.searchIt(event);
    }
  }

}
