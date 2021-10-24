import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './pages/home/home.component';
import { SearcherComponent } from './pages/searcher/searcher.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'searcher/:value', component: SearcherComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
