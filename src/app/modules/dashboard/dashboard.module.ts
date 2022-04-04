import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { YourPostsComponent } from "./pages/your-posts/your-posts.component";
import { PostJobComponent } from "./pages/post-job/post-job.component";
import { ProfileComponent } from "./pages/profile/profile.component";

@NgModule({
  declarations: [
    DashboardComponent,
    PostJobComponent,
    ProfileComponent,
    YourPostsComponent
  ],

  imports: [
    CommonModule,
    EditorModule,
    MaterialModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
