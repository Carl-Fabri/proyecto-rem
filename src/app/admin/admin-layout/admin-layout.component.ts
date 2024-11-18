import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule,AdminHeaderComponent],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  
}
