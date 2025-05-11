import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  direction:string='ltr'
  scroll(section:string){
    let target=document.getElementById(section);
    let nav=document.getElementById('nav');
    let yOffset=nav!.offsetHeight;
    let y= target!.offsetTop - yOffset ;

    if(target!.offsetTop == 0){
      window.scrollTo({
        top:0 ,
        behavior:'smooth'
      })
    }else{
      window.scrollTo({
        top:y ,
        behavior:'smooth'
      })
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('lang') == 'ar'){
      this.direction='rtl'
    }else{
      this.direction='ltr'
    }
  }
}
