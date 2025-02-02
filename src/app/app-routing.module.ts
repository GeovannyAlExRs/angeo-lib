import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseAngeoComponent } from './components/showcase-angeo/showcase-angeo.component';

const routes: Routes = [
  {
    path: 'angeo',
    component: ShowcaseAngeoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
