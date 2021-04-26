import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ExpertList } from 'src/app/Models/expert/expert.model';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

// /** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon',
//   'red',
//   'orange',
//   'yellow',
//   'olive',
//   'green',
//   'purple',
//   'fuchsia',
//   'lime',
//   'teal',
//   'aqua',
//   'blue',
//   'navy',
//   'black',
//   'gray',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];

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
  parseIntValoracion: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() expertList: any = [];

  constructor(private expertListService: ExpertListService) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.expertList);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    this.dataSource = this.expertList;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
          console.log(result);
          this.expertList = result;
        }
        console.log(result);
      });
  }

  selectedValoracion() {
    this.parseIntValoracion = parseInt(this.selectedValueValoracion);

    this.expertListService
      .getExpertByValoracion(this.parseIntValoracion)
      .subscribe((result) => {
        console.log(result);
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
    console.log(filterValue);
    this.expertListService
      .getExpertByNombre(filterValue)
      .subscribe((result: any) => {
        if (result[0] == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
          console.log(result);
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
        console.log(result[0]);
        if (result[0] == undefined) {
          this.expertListService.getAllExperts().subscribe((response) => {
            this.expertList = response;
          });
        } else {
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
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//   };
// }
