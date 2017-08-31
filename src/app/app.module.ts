import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000'
  })
});

export function provideClient(): ApolloClient {
  return apolloClient;
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
