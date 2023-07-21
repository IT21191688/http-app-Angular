import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private httpModule : HttpClient, private _snackBar: MatSnackBar) {
  }
  list:Array<any> = []

  deleteData(id: any){
    if(confirm('are you sure ' + id)){
      this.httpModule.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id)
        .subscribe(response => {
          if(response){
            this._snackBar.open('Deleted','close',{
              horizontalPosition: "end",
              verticalPosition: 'bottom',
              duration: 5000,
              direction: 'ltr'
            })
          }
        });
    }
  }
  ngOnInit(): void {
    this.httpModule.get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.list = response
      });
  }

}
