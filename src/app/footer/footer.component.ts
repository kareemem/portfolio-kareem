import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
direction:string='ltr'
ngOnInit(): void {
  if(localStorage.getItem('lang') == 'ar'){
    this.direction='rtl'
  }else{
    this.direction='ltr'
  }
}
}
