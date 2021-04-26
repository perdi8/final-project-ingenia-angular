import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ExpertList } from 'src/app/Models/expert/expert.model';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table-expert-list',
  templateUrl: './table-expert-list.component.html',
  styleUrls: ['./table-expert-list.component.scss'],
})
export class TableExpertListComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'estado', 'etiquetas', 'puntuacion'];
  dataSource: MatTableDataSource<ExpertList>;
  selected: string = '';
  selectedValueValoracion: string = '';
  Validado: string = 'Validado';
  Pdt: string = 'Pdt.Validar';
  SinValidar: string = 'Sin Validar';
  parseIntValoracion: number = 0;
  element: any = {};

  page_size: number = 5;
  page_number: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() expertList: any = [];

  constructor(
    private expertListService: ExpertListService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource(this.expertList);
  }

  ngDoCheck(): void {
    this.dataSource = this.expertList;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectExperto(positionExpert: any) {
    for (let index = 0; index < this.expertList.length; index++) {
      this.element = this.expertList[positionExpert];
    }

    this.router.navigate([`/expertos/${this.element.id}`]);
  }

  selectedEstado() {
    this.expertListService
      .getExpertByEstado(this.selected)
      .subscribe((result) => {
        if (result[0] == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
          this.expertList = result;
        }
      });
  }

  selectedValoracion() {
    this.parseIntValoracion = parseInt(this.selectedValueValoracion);

    this.expertListService
      .getExpertByValoracion(this.parseIntValoracion)
      .subscribe((result) => {
        if (result == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
          this.expertList = result;
        }
      });
  }

  applyFilterExperto(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.expertListService
      .getExpertByNombre(filterValue)
      .subscribe((result: any) => {
        if (result[0] == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
          this.expertList = result;
        }
      });
  }

  applyFilterEtiqueta(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.expertListService
      .getTagByEtiqueta(filterValue)
      .subscribe((result: any) => {
        if (result[0] == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
          // console.log(result[0].experts);
          this.expertList = result[0].experts;
        }

        // this.expertList = result[0].experts;
      });
  }

  getColor(puntuacion: number) {
    switch (puntuacion) {
      case 100:
        return '#4ADEBB';
        break;
      case 75:
        return '#B1F0A1';
        break;
      case 55:
        return '#F0CE76';
        break;
      case 25:
        return '#DEA876';
        break;
      case 15:
        return '#D66464';

      default:
        return 'falta' + '#C7C8CD';
        break;
    }
  }

  handlePage(e: any) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex;

    this.expertListService
      .getExpertListWithLimit(this.page_size)
      .subscribe((response) => {
        this.expertList = response;
      });
  }
}
