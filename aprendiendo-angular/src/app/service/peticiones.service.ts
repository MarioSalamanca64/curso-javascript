import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/';


//pidiendo datos de una api 
@Injectable()
export class PeticionesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url="https://reqres.in/";
    }
    //un observable requiere  .subscribe user id se agrega para que lo capture
    getUser(userId: any): Observable<any>{
        return this._http.get(this.url+'api/users/'+userId);
    }
    //agregar usuarios des de una api de la pagina https://reqres.in/
    //user es un objeto para guardar
    //para guardar los datos deben de ser un json string y --JSON.stringify(user)
    //addUser para el componente onSubmit
    addUser(user: any):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type',/*tipo*/'application/json');

        return this._http.post(`${this.url}api/users`,params,{headers:/*variable*/headers}); 
    }
}