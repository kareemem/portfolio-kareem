import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projects } from '../projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
direction:string='ltr'
  projects:Projects[]=[]
  constructor(private _ProjectsService:ProjectsService , private _Router:Router , private _ProjectService:ProjectService){}
  ngOnInit(): void {
    this._ProjectService.showNavLinks()
    this._ProjectsService.projects$.subscribe(data => {
      this.projects = data;
    });

    if(localStorage.getItem('lang') == 'ar'){
      this.direction='rtl'
    }else{
      this.direction='ltr'
    }
  }

  goToProject(id:number){
    this._ProjectService.hideNavLinks()
    this._Router.navigate(['/detailsProject',id])
  }
}
