import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  outputTextMenu = '';
  constructor(private router: Router, private textoMenu: ExpertListService) {}

  ngOnInit(): void {
    // localStorage.setItem('texto-menu', this.objeto);

    this.outputTextMenu = this.textoMenu.textoMenuEtiquetas;
  }
}
