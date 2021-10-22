import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MakeCoffeeComponent } from './views/pages/make-coffee';

const routes: Routes = [
  { path: '', component: MakeCoffeeComponent },
  { path: 'home', component: MakeCoffeeComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
