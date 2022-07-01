import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  isShowSidebar = true;
  constructor() {}

  ngOnInit(): void {}
  addClassToParent() {
    this.isShowSidebar = !this.isShowSidebar;
    this.newItemEvent.emit(this.isShowSidebar);
  }
}
