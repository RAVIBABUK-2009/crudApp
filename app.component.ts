import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Novels:any[]=[]
  count=0;
  incr()
  {
    this.count++;
  }


  constructor(private cs:CrudService){
    this.cs.getData().subscribe((data:any)=>this.Novels=data)
  }
  remove(id:number){
    this.cs.deleteData(id).subscribe((data:any)=>{this.Novels=data 
     window.location.reload()
    })

  }
  
  
}
