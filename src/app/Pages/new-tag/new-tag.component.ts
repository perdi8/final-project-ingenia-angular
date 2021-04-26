import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TagListService } from 'src/app/services/tag-list/tag-list-service.service';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.scss'],
})
export class NewTagComponent implements OnInit {
  textValue: string = '';
  outputListaEtiquetas = '';

  detailsFormNewExpert: FormGroup = new FormGroup({});
  constructor(private tagService: TagListService, private router: Router) {}

  ngOnInit(): void {
    this.outputListaEtiquetas = this.tagService.textoMenuNuevoExperto;
  }

  anadirEtiqueta() {
    this.tagService.postNewTag(this.textValue).subscribe((response) => {
      console.log(response);

      this.router.navigate(['/etiquetas']);
    });
  }
}
