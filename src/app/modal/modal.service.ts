import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor() {}

  private modalSubject = new Subject<string>();
  modalState = this.modalSubject.asObservable();

  openModal(title: string) {
    this.modalSubject.next(title);
  }

  closeModal() {
    this.modalSubject.next("");
  }
}
