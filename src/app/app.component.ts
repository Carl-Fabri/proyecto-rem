import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HypnoproyeccionesComponent } from './hypnoproyecciones/hypnoproyecciones.component';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common'
import { UserHeaderComponent } from "./user/user-header/user-header.component";
import { AdminHeaderComponent } from "./admin/admin-header/admin-header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HypnoproyeccionesComponent, HomeComponent, CommonModule, UserHeaderComponent, AdminHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'hypnoproyecciones';
}
