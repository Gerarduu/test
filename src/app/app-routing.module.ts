import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainGridComponent } from "./main-grid/main-grid.component";

const routes: Routes = [{ path: "", component: MainGridComponent }];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class AppRoutingModule {}
