import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Hyproyections } from '../../core/interfaces/hypnoproyections';
import { HypnoproyectionsService } from '../../core/service/hypnoproyections.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../shared/ui/alert-dialog/alert-dialog.component';
import { EditHypnoproyectionComponent } from '../edit-hypnoproyection/edit-hypnoproyection.component';


@Component({
    selector: 'app-userproyections',
    standalone: true,
    imports: [FontAwesomeModule,CommonModule, RouterLink, MatButtonModule],
    templateUrl: './userproyections.component.html',
    styleUrl: './userproyections.component.css'
})
export class UserproyectionsComponent {
  hypnoproyectionUser: Hyproyections[] = [];
  hypnoproyectionApi = inject(HypnoproyectionsService);

  constructor(library: FaIconLibrary,private dialog: MatDialog) {
    this.hypnoproyectionApi.getHypnoproyectionsList().subscribe((data) => {
      this.hypnoproyectionUser = data.filter(item => item.status === true);
    });
  }

  deleteHypnoproyection(postId: number) {
    this.hypnoproyectionApi.deleteHypnoProyection(postId).subscribe();
  }

  openDialog(postId: number) {
    console.log(postId);
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data: { postId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteHypnoproyection(postId);
      }
    });
  }


  openEditDialog(hypnoproyeccion: Hyproyections): void {
    const dialogRef = this.dialog.open(EditHypnoproyectionComponent, {
      width: '400px',
      data: hypnoproyeccion
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
