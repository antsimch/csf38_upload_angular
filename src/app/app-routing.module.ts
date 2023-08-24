import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'audio/:id', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
