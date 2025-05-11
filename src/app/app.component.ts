import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY-Portfolio';
  lang:any
  constructor(private router: Router , private translate: TranslateService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
    if('lang' in localStorage){
      this.lang = localStorage.getItem('lang')
      translate.use(this.lang);
    }else{
      translate.use(this.translate.defaultLang);
      localStorage.setItem('lang',this.translate.defaultLang)
    }
  }
}

