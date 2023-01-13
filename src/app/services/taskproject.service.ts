import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskprojectService {
  baseUrl="http://localhost:3000";
  taskURL="http://localhost:3000/posts";
  data :any;
  constructor(private http : HttpClient) { 

  }
  createproject(name:any,data:any){
    return this.http.post(this.baseUrl+ "/" + name,data);
  }

  getapi(){
    return this.http.get(this.taskURL);
  }
  postapi(data:any){
    return this.http.post(this.taskURL,data);
  }
  updateapi(data:any,id:any){
    // existing post pe jo api pe data usme modification krna data:any + id ki khaleke jana h kyu leka jana h
    return this.http.patch(this.taskURL + "/" + id,data);
  }
  deleteApi(id:any){
    return this.http.delete(this.taskURL + "/" + id);
  }
  //http://localhost:3000/posts/2
}
