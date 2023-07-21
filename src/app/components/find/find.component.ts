import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  searchId='';
  list:Array<any>=[];
  constructor(private http:HttpClient) {
  }
  loadData(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?id='+this.searchId)
      .subscribe(response=>{
        console.log(response);
        this.list=response;
        console.log(this.list);
      });
  }

}
