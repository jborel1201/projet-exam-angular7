import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPreviewComponent } from './folder-preview/folder-preview.component';

const routes: Routes = [
  { path: 'preview/:id', component: FolderPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
