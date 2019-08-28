import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit { 

  result: any

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  lookup(val){
    console.log(val);
    if(val.length == 0){
      this.result = {
      name: "Word length should be at least 1",
      definitions: []
    };
      return;
    }
    this.searchService.search(val)
    .subscribe(
      res => {
        console.log(res);
        if(res && res.name && res.definitions){
          this.result = res;
        } else{
          this.result = {
            name: "Word not found",
            definitions: []
          };
        }
      }
    )
  }

}