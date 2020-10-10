import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { OtherPageComponent } from './other-page/other-page.component';

const routes = [
  {path: "other", component: OtherPageComponent},
  {path: "", component: CharacterSearchComponent},
  {path: "**", component: CharacterSearchComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
