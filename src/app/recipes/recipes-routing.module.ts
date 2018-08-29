import {NgModule} from '@angular/core';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes.component';
import {RecipesResolverService} from './recipes-resolver.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RouterModule} from '@angular/router';

const recipesRoutes = [
  {
    path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipesResolverService}},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
