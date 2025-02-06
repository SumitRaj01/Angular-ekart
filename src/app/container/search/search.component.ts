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
