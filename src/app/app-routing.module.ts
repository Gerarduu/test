import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainGridComponent } from "./main-grid/main-grid.component";
import { AlbumsGridComponent } from "./albums-grid/albums-grid.component";

const routes: Routes = [
  { path: "", component: MainGridComponent },
  { path: "albums", component: AlbumsGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingCompoents = [MainGridComponent, AlbumsGridComponent];
