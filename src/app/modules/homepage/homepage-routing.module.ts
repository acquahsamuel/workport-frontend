import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages Components
import { HomepageComponent } from './homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
    {
        path: '', component: HomepageComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'faq', component: FaqComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }

