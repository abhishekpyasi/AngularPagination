import { Component } from "@angular/core";
import { PostService } from "./post.service";
import { ModalService } from "./modal/modal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ngPagination";

  posts: any;
  count: number = 0;

  page: number = 0;
  tableSize: number = 7;

  constructor(
    private postService: PostService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.getPostsfrombackend();
  }

  getPostsfrombackend() {
    this.postService.GetPosts(this.page).subscribe((data: any) => {
      this.posts = data.data;
      this.count = data.totalPassengers;
    });
  }

  onTableDataChange(event: number) {
    this.page = event;
    this.getPostsfrombackend();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPostsfrombackend();
  }

  gty(currentpage: any) {
    this.page = currentpage;

    this.getPostsfrombackend();
  }

  openModal() {
    this.modalService.openModal("Example Modal");
  }
}
