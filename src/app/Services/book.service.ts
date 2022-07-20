import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BookEditViewModel } from "../Models/book/BookEditViewModel";
import { ResultViewModel } from "../Models/ResultViewModel";


@Injectable()
export class BookServices{
    constructor(private http:HttpClient){}
    addBook(Book:BookEditViewModel){
        return this.http.post<ResultViewModel>(environment.APIurl+ "Book/post",Book)
    }
    getBook(){
        return this.http.get<ResultViewModel>( environment.APIurl+"Book/get")
    }
    getBookById(id:number){
        return this.http.get<ResultViewModel>( environment.APIurl+"Book/getbyid?id="+id)
    }
    getBookEditableByID(id:number){
        return this.http.get<ResultViewModel>( environment.APIurl+"Book/GetEditableByID?id="+id)
    }
    deleteBook(id:number){
        return this.http.delete<ResultViewModel>(environment.APIurl+ "Book/delete?id="+id)
    }
    updateBook(Book:BookEditViewModel){
        return this.http.put<ResultViewModel>(environment.APIurl+"Book/put",Book)
    }
}