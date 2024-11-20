import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import {MatListModule} from '@angular/material/list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { HeaderNavService } from '../user-header/header-nav.service';




@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterModule,UserHeaderComponent,MatSidenavContainer, MatSidenav,MatListModule,MatSidenavContent,MatIcon],
  templateUrl: './user-layout.component.html',
  styles: ``
})

export class UserLayoutComponent  implements AfterViewInit{
  @ViewChild('snav') sidenav: MatSidenav;

  constructor(private sidenavService: HeaderNavService) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  closeMenu() {
    this.sidenav.close();
  }
}
