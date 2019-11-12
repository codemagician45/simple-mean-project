import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/layouts/home/home.component';
import { TabsComponent } from './components/components/tabs/tabs.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
