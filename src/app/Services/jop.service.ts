import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../Models/test";

@Injectable()
export class JopServices{
constructor(private Http:HttpClient){}
getlist(pageIndex:number,pageSize:number){
    let URl=`https://api.mohamed-sadek.com/Job/Get?orderBy=ID&isAscending=False&pageIndex=${pageIndex}&pageSize=${pageSize}`
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': "+0qgmtoBewgvNNU4hkWmEK+P6+BSDXcLVudaWM1acTzhfrKnRU8QATx+MrfJOHWMZmIRMUc2EGl9Na4cv8Tf86qi8lfoG3ACi1WJlcyJJ7gUaR+GsmnAq3LQoXCFN/1JqIu1TUnQikM7A8GajKSine0F1AqIkIfyROS1pm8lWvqQlDjnBkLw6D72W6d2GGyd7AcAQry6AA5vWa+AbbKG8k6wT/YGDDbz",
     });
    let options = { headers: headers };
    return this.Http.get<ResultViewModel>(URl,options);
}
}