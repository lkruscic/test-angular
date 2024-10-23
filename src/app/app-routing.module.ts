import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonacoDiffEditorComponent} from "./monaco-diff-editor/monaco-diff-editor.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'monaco-diff-editor', component: MonacoDiffEditorComponent },
  { path: 'app', component:  AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
