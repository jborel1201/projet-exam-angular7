import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderPreviewService } from '../folder-preview.service';



@Component({
  selector: 'app-folder-preview',
  templateUrl: './folder-preview.component.html',
  styleUrls: ['./folder-preview.component.css']
})
export class FolderPreviewComponent implements OnInit {

  openFolder;
  constructor(
    private folderPreview: FolderPreviewService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getOpenFolder(param.id);
    });

  }

  getOpenFolder(id) {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.openFolder = this.folderPreview.getOpenFolder(id);
  }


 test(e){
   console.log(e.target.files)
 }


}
