import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output() seacrhTextChanged:EventEmitter<string>=new EventEmitter<string>()

  onSeacrhTextChanged(){
    this.seacrhTextChanged.emit(this.searchText)
  }

  updateSearchText(inputEL: HTMLInputElement){
      // this.searchText = event.target.value;
      // console.log(inputEL.value);
      this.searchText=inputEL.value
      this.seacrhTextChanged.emit(this.searchText)
  }

  
}
