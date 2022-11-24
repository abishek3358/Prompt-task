import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  searchText:any;
bool:any=true;
data:any;
  promptInfo:any = [];
  userInfo:any ={
      name: "Abishek",
      email:"abishek333@gmail.com",
      contact:"8489046571",
      address:"37 Pudhur South street Orathanadu(TK) Thanjavur(DT)."
    }
  constructor(
    private search:Ng2SearchPipeModule

  ) { }
  ngOnInit(): void {
  };
  table(){
      this.bool = false;
      let obj:any = {
        name:'',
        email:'',
        contact:'',
        address:''
      }
      let i = 1;
      let obj_value = '';
      for(let obj in this.userInfo) {

        obj_value += "," + this.userInfo[obj];
      }
     let val = prompt("Please enter your details",obj_value);
     let list:any = val?.split(',');
     for(let obj1  in obj) {
      obj[obj1] = list[i] ;
       i++;
     }
     this.promptInfo.push(obj);
    
    }
    deletUser(i:any){
      if( confirm('Are you you want to delete?')){
        this.promptInfo.splice(i, 1);
      }
      else{
        return;
      }
    }
}
