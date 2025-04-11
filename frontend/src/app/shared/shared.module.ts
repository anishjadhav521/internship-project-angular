import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PostsComponent } from './components/posts/posts.component';
import { CommentComponent } from './components/comment/comment.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrawerModule } from 'primeng/drawer';
import { Message } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ShowLikesComponent } from './components/show-likes/show-likes.component';



@NgModule({
  declarations: [
    FollowersComponent,
    FollowingComponent,
    CommentsComponent,
    PostsComponent,
    CommentComponent,
    MenuComponent,
    ShowLikesComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ButtonModule,
    DrawerModule,
    Message,
    ToastModule,
    MessageModule
    
  ],
  exports:[
    FollowersComponent,
    FollowingComponent,
    CommentsComponent,
    PostsComponent,
    MenuComponent,
    ShowLikesComponent
  ]
})
export class SharedModule { }
