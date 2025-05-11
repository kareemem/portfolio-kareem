import { Injectable } from '@angular/core';
import { Projects } from './projects';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

private projectsSubject = new BehaviorSubject<Projects[]>([]);
  projects$ = this.projectsSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.loadProjects();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadProjects();
    });
  }

  private loadProjects(): void {
    this.translate.get([
      'projects.nameProjectOne',
      'projects.descProjectOne',
      'projects.nameProjectTwo',
      'projects.descProjectTwo',
      'projects.nameProjectThree',
      'projects.descProjectThree',
      'projects.nameProjectFour',
      'projects.descProjectFour',
      'projects.nameProjectFive',
      'projects.descProjectFive',
      'projects.nameProjectSex',
      'projects.descProjectSex'
    ]).subscribe((translations: any) => {
      const projects: Projects[] = [
        {
          id: 1,
          title: translations['projects.nameProjectOne'],
          desc: translations['projects.descProjectOne'],
          src: 'e-commerce/1.png'
        },
        {
          id: 2,
          title: translations['projects.nameProjectTwo'],
          desc: translations['projects.descProjectTwo'],
          src: 'fcbarcelona/1.png'
        },
        {
          id: 3,
          title: translations['projects.nameProjectThree'],
          desc: translations['projects.descProjectThree'],
          src: 'yummu/1.png'
        },
        {
          id: 4,
          title: translations['projects.nameProjectFour'],
          desc: translations['projects.descProjectFour'],
          src: 'watch/1.png'
        },
        {
          id: 5,
          title: translations['projects.nameProjectFive'],
          desc: translations['projects.descProjectFive'],
          src: 'profile/1.png'
        },
        {
          id: 6,
          title: translations['projects.nameProjectSex'],
          desc: translations['projects.descProjectSex'],
          src: 'fokir/1.png'
        }
      ];

      this.projectsSubject.next(projects);
    });
  }

}
