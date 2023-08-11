import { Component, OnInit } from "@angular/core";
import { ModalService } from "./modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  title: string = "";
  isOpen: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalState.subscribe((data) => {
      this.title = data;
      this.isOpen = !!data;
    });
    // Convert title to a boolean
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
