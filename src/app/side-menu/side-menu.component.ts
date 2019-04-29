import { Component, OnInit } from '@angular/core';
import { FOLDERS } from '../mock-folders';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  folders=FOLDERS;
  folderSelected;
  constructor() { }

  ngOnInit() { 
  }

  selectFolder(folder) {
    this.folderSelected = folder;
  }

}
