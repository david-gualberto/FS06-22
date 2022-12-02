import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';
import { DettagliUserComponent } from './components/dettagli-user/dettagli-user.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';
import { UserComponent } from './components/user/user.component';

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
    },
    {
        path: "dettagli",
        component: DettagliCardComponent
    },
    {
        path: "user",
        component: UserComponent,
        children: [
            {
                path: ":id",
                component: DettagliUserComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: "",
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
