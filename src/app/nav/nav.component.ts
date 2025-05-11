import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , AfterViewInit{
changeNav:boolean=true
direction:string='ltr'
lang:string='en'
  constructor(private _ProjectService:ProjectService , private _TranslateService:TranslateService){
    this.lang = this._TranslateService.currentLang
  }
  ngOnInit(): void {
    this._ProjectService.changeLinksNavBar.subscribe({
      next:()=>{
        this.changeNav=this._ProjectService.changeLinksNavBar.value
      }
    })
    if(localStorage.getItem('lang') == 'ar'){
      this.direction='rtl'
    }else{
      this.direction='ltr'
    }
  }

ngAfterViewInit(): void {
  if (localStorage.getItem('lang') === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.style.setProperty('--indicator-transform', 'translateX(-1.8em)');
  } else {
    document.body.setAttribute('dir', 'ltr');
    document.documentElement.style.setProperty('--indicator-transform', 'translateX(1.8em)');
  }
  this.load();

}
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

  changeLanguage(){
    if(this.lang == 'en'){
      localStorage.setItem('lang' , 'ar')
    }else{
      localStorage.setItem('lang' , 'en')
    }
    window.location.reload()
  }


  changeDarkMode() {
 const body = document.querySelector('body');
  const icon = document.querySelector('.btn_icon');

  const isDark = body?.classList.toggle('darkMode');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');

  icon?.classList.remove('fa-sun', 'fa-moon');
  icon?.classList.add(isDark ? 'fa-moon' : 'fa-sun');

  icon?.classList.remove('animated-ltr', 'animated-rtl');

  const lang = localStorage.getItem('lang') || 'en';
  const animClass = lang === 'ar' ? 'animated-rtl' : 'animated-ltr';
  icon?.classList.add(animClass);

  setTimeout(() => {
    icon?.classList.remove(animClass);
  }, 500);
}

load() {
  const body = document.querySelector('body');
  const icon = document.querySelector('.btn_icon');
  const darkMode = localStorage.getItem('darkMode');

  icon?.classList.remove('fa-sun', 'fa-moon');

  if (darkMode === 'true') {
    body?.classList.add('darkMode');
    icon?.classList.add('fa-moon');
  } else {
    body?.classList.remove('darkMode');
    icon?.classList.add('fa-sun');
  }
}
}
