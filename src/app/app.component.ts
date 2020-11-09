import { Component } from '@angular/core';

interface dataType{
  name:string,
  id:number,
  address:any,
  indian:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project7';
  getData()
  {
    const data:dataType={
      name:"Gayatri Suslade",
      id:26,
      indian:true,
      address:"Mumbai"
    }
    return data;
  }
}
