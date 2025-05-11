import { DetailsProjects } from './../details-projects';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  direction:string='ltr'
  allProjects:any[]=[]
  id:number | null = null
  detailsProject:DetailsProjects | null = null
  imgs:{src:string}[]=[]
  overview: { desc: string }[] = [];
  constructor(private _ProjectService:ProjectService , private _ActivatedRoute:ActivatedRoute , private _Location:Location){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit(): void {
    if(localStorage.getItem('lang') == 'ar'){
      this.direction='rtl'
    }else{
      this.direction='ltr'
    }

    this.id = +this._ActivatedRoute.snapshot.paramMap.get('id')!
    this._ProjectService.project$.subscribe(data=>{
      this.allProjects = data
    this.getProject()
    })
  }
  getProject(){
    for(let i=0 ; i < this?.allProjects.length ; i++){
      if(this.allProjects[i].id === this.id){
        this.detailsProject = this.allProjects[i];
        this.overview = this.allProjects[i].overview;
        this.imgs = this.allProjects[i].imgs;
      }
    }
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }
  showNav(){
    this._ProjectService.showNavLinks()
  }
}
