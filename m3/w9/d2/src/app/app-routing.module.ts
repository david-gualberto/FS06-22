import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';

const routes: Routes = [
    {
        path: "",
        component: ButtonComponent
    },

    {
        path: "attivi",
        component: PostAttiviComponent
    },
    {
        path: "non_attivi",
        component: PostNonAttiviComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
