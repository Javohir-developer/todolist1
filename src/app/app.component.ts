import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.html'],
})
export class AppComponent implements OnInit {
  public results:Review[] = [];
  constructor(private http: HttpClient) { }

      addTodo(newTodoLabel){
        this.http.get('http://todolist/frontend/web/v1/api/create/'+newTodoLabel).subscribe(data => {
          this.results = data as Review[];
        });
      }

      ngOnInit() {
        this.http.get('http://todolist/frontend/web/v1/api/index').subscribe(data => {
            this.results = data as Review[];
          });
      }

      chek(id){
        this.http.get('http://todolist/frontend/web/v1/api/update/'+id).subscribe(data => {
          this.results = data as Review[];
          console.log(this.results);
        });
      }
      delete(id){
        this.http.get('http://todolist/frontend/web/v1/api/delete/'+id).subscribe(data => {
          this.results = data as Review[];
        });
      }
}

interface Review{
  id:string;
  name:string;
  count:number;
  chek:number;
}


