import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directories';
  public myclass:boolean=false;
  public mystyle:boolean=false;
  public data=[
    {id:1,name:"anil",email:"anil@gmail.com",address:"vapi",phone:9898987878,working:true},
    {id:2,name:"sunil",email:"sunil@gmail.com",address:"valsad",phone:9876545678,working:false},
    {id:3,name:"vinod",email:"vinod@gmail.com",address:"surat",phone:9898987878,working:true
  }
  ];
  public week:any[]=["sunday","monday","tuesday","wednesday","thursday","firday","saturday"]; 
  public value!:string;
  public getClass()
  {
    return{ 'text-primary text-danger':this.myclass}
  }
  getStyle()
  { 
    let color=
    {
      "color":this.mystyle?'red':"normal"
    }
    return color;
  }
}

