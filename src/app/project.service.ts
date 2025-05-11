import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailsProjects } from './details-projects';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  changeLinksNavBar = new BehaviorSubject(true)
  private projectSubject = new BehaviorSubject<DetailsProjects[]>([]);
  project$ = this.projectSubject.asObservable();

  showNavLinks(){
  this.changeLinksNavBar.next(true)
}
  hideNavLinks(){
  this.changeLinksNavBar.next(false)
}

  constructor(private translate: TranslateService) {
    this.loadProject()
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>{
      this.loadProject()
    })
  }


  private loadProject():void{
    this.translate.get([
      'detailsProject.endOverview',
      'ECommerce.name',
      'ECommerce.title',
      'ECommerce.overviewOne',
      'ECommerce.overviewTwo',
      'ECommerce.overviewThree',
      'ECommerce.overviewFour',
      'barcelona.name',
      'barcelona.title',
      'barcelona.overviewOne',
      'barcelona.overviewTwo',
      'barcelona.overviewThree',
      'barcelona.overviewFour',
      'yummu.name',
      'yummu.title',
      'yummu.overviewOne',
      'yummu.overviewTwo',
      'yummu.overviewThree',
      'watch.name',
      'watch.title',
      'watch.overviewOne',
      'watch.overviewTwo',
      'watch.overviewThree',
      'profile.name',
      'profile.title',
      'profile.overviewOne',
      'profile.overviewTwo',
      'profile.overviewThree',
      'fokir.name',
      'fokir.title',
      'fokir.overviewOne',
      'fokir.overviewTwo',
      'fokir.overviewThree',
    ]).subscribe((translations:any)=>{
      const project:DetailsProjects[]=[
        {
          id:1,
          name: translations ['ECommerce.name'],
          title: translations ['ECommerce.title'],
          liveLink:'https://e-commerce-ten-fawn.vercel.app/signin',
          imgs:[
            {src:'e-commerce/1.png'},
            {src:'e-commerce/2.png'},
            {src:'e-commerce/3.png'},
            {src:'e-commerce/4.png'},
            {src:'e-commerce/5.png'},
            {src:'e-commerce/6.png'},
            {src:'e-commerce/7.png'},
            {src:'e-commerce/8.png'},
            {src:'e-commerce/9.png'},
            {src:'e-commerce/10.png'},
            {src:'e-commerce/11.png'}
          ],
          overview:[
            {desc:translations ['ECommerce.overviewOne'] },
            {desc:translations ['ECommerce.overviewTwo']},
            {desc:translations ['ECommerce.overviewThree']},
            {desc:translations ['ECommerce.overviewFour']},
            {desc:translations ['detailsProject.endOverview']}
          ],
          tools:[
            {toolName:'Angular'},
            {toolName:'TypeScript'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'Owl Carousel'},
            {toolName:'REST API (for product data)'},
            {toolName:'ngx-pagination (for paginating product listings)'},
            {toolName:'User authentication (Login/Logout system)'}
          ],
          githubLink:'https://github.com/kareemem/E-commerce'
        },
        {
          id:2,
          name:translations ['barcelona.name'],
          title:translations ['barcelona.title'],
          liveLink:'https://fc-barcelona-iota.vercel.app',
          imgs:[
            {src:'fcbarcelona/1.png'},
            {src:'fcbarcelona/2.png'},
            {src:'fcbarcelona/3.png'},
            {src:'fcbarcelona/4.png'},
            {src:'fcbarcelona/5.png'},
            {src:'fcbarcelona/6.png'},
            {src:'fcbarcelona/7.png'},
            {src:'fcbarcelona/8.png'},
            {src:'fcbarcelona/9.png'},
            {src:'fcbarcelona/10.png'},
          ],
          overview:[
            {desc:translations ['barcelona.overviewOne']},
            {desc:translations ['barcelona.overviewTwo']},
            {desc:translations ['barcelona.overviewThree']},
            {desc:translations ['barcelona.overviewFour']},
            {desc:translations ['detailsProject.endOverview']},
          ],
          tools:[
            {toolName:'Angular'},
            {toolName:'TypeScript'},
            {toolName:'Stand-alone components'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'WOW.js (for animations)'},
            {toolName:'Animate.css (for animations)'},
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'Owl Carousel'},
            {toolName:'ngx-pagination (for paginating product listings)'},
          ],
          githubLink:'https://github.com/kareemem/FCbarcelona'
        },
        {
          id:3,
          name:translations ['yummu.name'],
          title:translations ['yummu.title'],
          liveLink:'https://yummu-cwut.vercel.app/',
          imgs:[
            {src:'yummu/1.png'},
            {src:'yummu/2.png'},
            {src:'yummu/3.png'},
            {src:'yummu/4.png'},
            {src:'yummu/5.png'},
            {src:'yummu/6.png'},
            {src:'yummu/7.png'},
            {src:'yummu/8.png'},
          ],
          overview:[
            {desc:translations ['yummu.overviewOne']},
            {desc:translations ['yummu.overviewTwo']},
            {desc:translations ['yummu.overviewThree']},
            {desc:translations ['detailsProject.endOverview']},
          ],
          tools:[
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'JavaScript'},
            {toolName:'jQuery'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'REST API (for food data)'},
          ],
          githubLink:'https://github.com/kareemem/yummu'
        },
        {
          id:4,
          name:translations ['watch.name'],
          title:translations ['watch.title'],
          liveLink:'https://watch-ochre.vercel.app/',
          imgs:[
            {src:'watch/1.png'},
            {src:'watch/2.png'},
            {src:'watch/3.png'},
            {src:'watch/4.png'},
            {src:'watch/5.png'},
            {src:'watch/6.png'},
            {src:'watch/7.png'},
          ],
          overview:[
            {desc:translations ['watch.overviewOne']},
            {desc:translations ['watch.overviewTwo']},
            {desc:translations ['watch.overviewThree']},
            {desc:translations ['detailsProject.endOverview']},
          ],
          tools:[
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'JavaScript'},
            {toolName:'jQuery'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'WOW.js (for animations)'},
            {toolName:'Animate.css (for animations)'},
          ],
          githubLink:'https://github.com/kareemem/watch'
        },
        {
          id:5,
          name:translations ['profile.name'],
          title:translations ['profile.title'],
          liveLink:'https://profile-five-roan.vercel.app/',
          imgs:[
            {src:'profile/1.png'},
            {src:'profile/2.png'},
            {src:'profile/3.png'},
            {src:'profile/4.png'},
            {src:'profile/5.png'},
            {src:'profile/6.png'},
          ],
          overview:[
            {desc:translations ['profile.overviewOne']},
            {desc:translations ['profile.overviewTwo']},
            {desc:translations ['profile.overviewThree']},
            {desc:translations ['detailsProject.endOverview']},
          ],
          tools:[
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'CSS Animations (for text and hover effects)'},
          ],
          githubLink:'https://github.com/kareemem/profile'
        },
        {
          id:6,
          name:translations ['fokir.name'],
          title:translations ['fokir.title'],
          liveLink:'https://fokir-beta.vercel.app',
          imgs:[
            {src:'fokir/1.png'},
            {src:'fokir/2.png'},
            {src:'fokir/3.png'},
            {src:'fokir/4.png'},
            {src:'fokir/5.png'},
            {src:'fokir/6.png'},
            {src:'fokir/7.png'},
          ],
          overview:[
            {desc:translations ['fokir.overviewOne']},
            {desc:translations ['fokir.overviewTwo']},
            {desc:translations ['fokir.overviewThree']},
            {desc:translations ['detailsProject.endOverview']},
          ],
          tools:[
            {toolName:'HTML'},
            {toolName:'CSS'},
            {toolName:'JavaScript'},
            {toolName:'Bootstrap'},
            {toolName:'FontAwesome'},
            {toolName:'Owl Carousel'},
            {toolName:'CSS Animations (for text and hover effects)'},
          ],
          githubLink:'https://github.com/kareemem/Fokir'
        },
      ];
      this.projectSubject.next(project)
    })
  }

}
