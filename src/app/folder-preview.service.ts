import { Injectable } from '@angular/core';
import { FOLDERS } from './mock-folders';

@Injectable({
  providedIn: 'root'
})
export class FolderPreviewService {

  constructor() { }

  getOpenFolder(id){    
    return FOLDERS[id]
  }
}
