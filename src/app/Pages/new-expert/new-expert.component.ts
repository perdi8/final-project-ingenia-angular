import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

@Component({
  selector: 'app-new-expert',
  templateUrl: './new-expert.component.html',
  styleUrls: ['./new-expert.component.scss'],
})
export class NewExpertComponent implements OnInit {
  outputListaExpertos = '';
  selectedEtiqutas = '';
  selectedDisponibilidad = '';
  nombre = '';
  nif = '';
  contacto_telefono = '';
  contacto_email = '';
  contacto_ciudad = '';
  contacto_linkedin = '';

  tag: any = {};
  tagList: any = [];

  nuevoExperto: any = {
    nombre: '',
    created_at: '',
    update_at: '',
    estado_motivo: '',
    disponibilidad: '',
    modalidad: '',
    autonomo: true,
    contacto_telefono: '',
    contacto_email: '',
    contacto_ciudad: '',
    contacto_linkedin: '',
    condiciones_porcentaje: '',
    condiciones_precio_hora: '',
    puntuacion: 75,
    nif: '',
    credenciales_correo: '',
    credenciales_correo_password: '',
    credenciales_zoom: '',
    credenciales_zoom_password: '',
    fichero_foto: '',
    fichero_cv: '',
    observaciones: '',
    origen: '',
    estado: 'Sin Validar',
    tags: [],
  };

  detailsFormNewExpert: FormGroup = new FormGroup({});
  constructor(
    private expertService: ExpertListService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.detailsFormNewExpert = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      nif: '',
      contacto_email: '',
      contacto_ciudad: '',
      contacto_linkedin: '',
    });

    this.outputListaExpertos = this.expertService.textoMenuNuevoExperto;
  }

  submitDetailsNewExpert() {
    this.detailsFormNewExpert.get('nombre')?.invalid &&
    this.detailsFormNewExpert.get('telefono')?.invalid
      ? console.log('los campos deben rellenarse correctamente')
      : this.expertService
          .postNewExpert(this.nuevoExperto)
          .subscribe((response) => {
            setTimeout(() => {
              this.router.navigate(['/expertos']);
            }, 500);
          });
  }

  selectedEtiqueta() {
    let nuevaEtiqueta = {
      id: undefined,
      nombre: this.selectedEtiqutas,
      created_at: `${new Date().getFullYear()}-0${new Date().getMonth()}-0${new Date().getDay()}`,
      updated_at: `${new Date().getFullYear()}-0${new Date().getMonth()}-0${new Date().getDay()}`,
    };
    this.tagList.push(nuevaEtiqueta);
    this.nuevoExperto.tags = this.tagList;
    console.log(this.tagList);
  }

  selectedAvailability() {
    this.nuevoExperto.disponibilidad = this.selectedDisponibilidad;
  }
}
