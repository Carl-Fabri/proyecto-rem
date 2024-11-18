import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from '../user-header/user-header.component';


@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterModule,UserHeaderComponent],
  templateUrl: './user-layout.component.html',
  styles: ``
})

export class UserLayoutComponent {

}
