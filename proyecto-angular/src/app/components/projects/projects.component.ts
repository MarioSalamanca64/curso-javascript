import { Component, OnInit } from '@angular/core';
//importado de services project global
import{Project} from '../../models/project';
import{ProjectService} from '../../services/project.service';
import{Global} from '../../services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  //cargando el projectServices
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  //mostrar informacion en la pagina que es un array de tipo objeto
  public projects: Project[] | undefined;
  //mostrar img
  public url: string;


  constructor(
    //injectable
    private _projectService:ProjectService
  ) {
    //mostrar img
    this.url= Global.url;
  }

  ngOnInit(){
    //se crea ya que es el primero en cargar den componente
    this.getProjects();
  }
  //creando nuevo metodo se llama del mismo nombre
  getProjects(){
    //subscribe para suncribir el obserbable y re cojer la respuesta que nos da el api
    this._projectService.getProjects().subscribe(
      response => {
        //si  llega o no 
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  

}
