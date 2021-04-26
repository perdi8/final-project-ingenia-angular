import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss'],
})
export class ExpertDetailComponent implements OnInit {
  detailExpert: any = [];
  idExpert = 0;
  data: any = {};
  selected: string = '';
  selectedMotivo = '';
  observacionesText = '';
  especificaMotivo = '';
  nombre = true;
  nombreExperto = '';
  valueInput = '';

  textoMenuNewEXpert = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private expertListService: ExpertListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idExpert = params.id;
    });

    this.expertListService.getExpertsById(this.idExpert).subscribe((result) => {
      this.detailExpert = [result];
      this.data = result;
    });
    this.textoMenuNewEXpert = this.expertListService.textoMenuNuevoExperto;
    console.log(this.expertListService.textoMenuNuevoExperto);
  }

  cambioNombre() {
    this.nombre = false;
  }

  nombreCambiado() {
    console.log('nombre actualizado');

    let expert = {
      ...this.data,
      nombre: this.valueInput,
    };

    this.expertListService.putByNameExpert(expert).subscribe((response) => {
      this.detailExpert = [response];
      this.ngOnInit();
    });

    this.nombre = true;
  }

  updateMananas() {
    let disponibilidad = {
      ...this.data,
      disponibilidad: 'Mañanas',
    };

    this.expertListService.putExpert(disponibilidad).subscribe((response) => {
      this.ngOnInit();
    });
  }

  updateTardes() {
    let disponibilidad = {
      ...this.data,
      disponibilidad: 'Tardes',
    };

    this.expertListService.putExpert(disponibilidad).subscribe((response) => {
      this.ngOnInit();
    });
  }

  updateValidado() {
    let validado = {
      ...this.data,
      estado: 'Validado',
    };

    this.expertListService.putExpert(validado).subscribe((response) => {
      this.ngOnInit();
    });
  }

  updatePdtValidar() {
    let PdtValidar = {
      ...this.data,
      estado: 'Pdt.Validar',
    };
    this.expertListService.putExpert(PdtValidar).subscribe((response) => {
      this.ngOnInit();
    });
  }

  observacionesPeticion() {
    let observacionesBody = {
      ...this.data,
      observaciones: this.observacionesText,
    };

    this.expertListService
      .putExpert(observacionesBody)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }

  selectMotivo() {
    let estado = {
      ...this.data,
      estado_motivo: this.selectedMotivo,
    };
    console.log(estado);
  }

  especificaMotivoDescarte() {
    let estadoDescarte = {
      ...this.data,
      estado_motivo: this.especificaMotivo,
    };
    console.log(estadoDescarte);
  }
}
