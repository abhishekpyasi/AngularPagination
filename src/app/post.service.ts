import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: "root",
})
export class PostService {
  itemsPerPage = 5;
  currentPage = 1;
  constructor(private http: HttpClient) {}

  GetPosts(page: number) {
    return this.http.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`
    );
    // return this.http.get(endpoint);
  }
}
