import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {RecipesResolverService} from '../recipes/recipes-resolver.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {LoggingInterceptor} from '../shared/logging.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipesResolverService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {
}
