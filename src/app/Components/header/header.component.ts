import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';
import { TagListService } from 'src/app/services/tag-list/tag-list-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() textoEtiqueta: string = 'Lista de Expertos';
  @Input() volverListaExpertos: string = '';
  @Input() volverListaEtiquetas: string = '';

  lengthExpertos: number = 0;
  lengthEtiquetas: number = 0;
  mostrarTextoExpertos = true;

  constructor(
    private expertListData: ExpertListService,
    private tagListService: TagListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expertListData.getAllExperts().subscribe((response) => {
      this.lengthExpertos = response.length;
    });

    this.tagListService.getTagList().subscribe((response) => {
      this.lengthEtiquetas = response.length;
    });

    if (this.volverListaExpertos === 'Volver a la Lista de Expertos') {
      this.textoEtiqueta = '';
    }
    console.log(this.volverListaExpertos);

    if (this.volverListaEtiquetas === 'Volver a la Lista de Etiquetas') {
      this.textoEtiqueta = '';
    }
    console.log(this.volverListaExpertos);
  }

  navigationExperto() {
    this.router.navigate(['/newExperto']);
  }

  navigationEtiqueta() {
    this.router.navigate(['/newEtiqueta']);
  }

  goBackListExperts() {
    this.router.navigate(['/expertos']);
  }

  goBackListTags() {
    this.router.navigate(['/etiquetas']);
  }
}
