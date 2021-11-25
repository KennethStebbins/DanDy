import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { GameComponent } from './game/game.component';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { ChatWindowComponent } from './game/chat-window/chat-window.component';
import { GameNavbarComponent } from './game/game-navbar/game-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    GameComponent,
    GameBoardComponent,
    ChatWindowComponent,
    GameNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
