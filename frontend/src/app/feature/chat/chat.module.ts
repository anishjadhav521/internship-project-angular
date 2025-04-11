import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ChatComponent,
    ChatSectionComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ChatModule { }
