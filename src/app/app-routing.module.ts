import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsComponent } from 'app/rooms/rooms.component';
import { RoomComponent } from 'app/room/room.component';

const routes: Routes = [{
  path: '',
  component: RoomsComponent
}, {
  path: ':room',
  component: RoomComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
