import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output() seacrhTextChanged:EventEmitter<string>=new EventEmitter<string>()


  //Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the different token from the queries element.
  //2. static: Determines when the query is resolved. 

// True is when the view is initialized (before the first change detection) for the first time.
// False if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl:ElementRef

  onSeacrhTextChanged(){
    this.seacrhTextChanged.emit(this.searchText)
  }

  updateSearchText(){
      // this.searchText = event.target.value;
      // console.log(inputEL.value);
      this.searchText=this.searchInputEl.nativeElement.value
      this.seacrhTextChanged.emit(this.searchText)
  }

  
}
