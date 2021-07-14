import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../News";
import { Comment } from "../Comment";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl: string = 'http://localhost:5000/News';

  constructor(private http: HttpClient) { }

  getNewses(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
  
  getNews(id:any): Observable<News> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<News>(url);
  }

  updateNews(news: News): Observable<News> {
    const url = `${this.apiUrl}/${news.id}`;
    return this.http.put<News>(url, news, httpOptions);
  }

  addNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news, httpOptions);
  }


}
