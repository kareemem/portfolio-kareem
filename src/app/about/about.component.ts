import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
direction:string='ltr'
ngOnInit(): void {
  if(localStorage.getItem('lang') == 'ar'){
    this.direction='rtl'
  }else{
    this.direction='ltr'
  }
}
}
