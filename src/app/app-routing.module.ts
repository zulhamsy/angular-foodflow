import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './app-guard.service';

import { RecipeComponent } from './recipe/recipe.component';
import { EditServerComponent } from './routing/edit-server/edit-server.component';
import { RoutingComponent } from './routing/routing.component';
import { ShowServerComponent } from './routing/show-server/show-server.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'shopping-list', component: ShoppingComponent },
  { path: 'shopping/:id', component: ShoppingComponent },
  {
    path: 'servers',
    component: RoutingComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'show', component: ShowServerComponent },
      { path: 'edit', component: EditServerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
