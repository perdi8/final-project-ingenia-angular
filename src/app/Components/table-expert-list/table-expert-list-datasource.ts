// import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { map } from 'rxjs/operators';
// import { Observable, of as observableOf, merge } from 'rxjs';
// import { Input } from '@angular/core';
// import { TableExpertListComponent } from './table-expert-list.component';

// enum Estados {
//   Validado = 'Validado',
//   Pdt_valdar = 'Estado',
//   Sin_estado = '',
// }

// // TODO: Replace this with your own data model type
// export interface TableExpertListItem {
//   id: number;
//   nombre: string;
//   created_at: string;
//   update_at: string;
//   estado_motivo: string;
//   disponibilidad: string;
//   modalidad: string;
//   autonomo: boolean;
//   contacto_telefono: string;
//   contacto_email: string;
//   contacto_ciudad: string;
//   contacto_linkedin: string;
//   condiciones_porcentaje: string;
//   condiciones_precio_hora: string;
//   puntuacion: number;
//   nif: string;
//   credenciales_correo: string;
//   credenciales_correo_password: string;
//   credenciales_zoom: string;
//   credenciales_zoom_password: string;
//   fichero_foto: string;
//   fichero_cv: string;
//   observaciones: string;
//   origen: string;
//   estado: boolean;
//   tags: any;
// }

// const DATABACK = new TableExpertListComponent();
// DATABACK.dataBack;

// // TODO: replace this with real data from your application
// // const EXAMPLE_DATA: TableExpertListItem[] = [
// //   {
// //     nombreExperto: 'Miguel',
// //     estado: Estados.Validado,
// //     etiquetas: ['React'],
// //     valoracion: '100',
// //   },
// //   {
// //     nombreExperto: 'Cristina',
// //     estado: Estados.Validado,
// //     etiquetas: ['Angular'],
// //     valoracion: '90',
// //   },
// // ];

// /**
//  * Data source for the TableExpertList view. This class should
//  * encapsulate all logic for fetching and manipulating the displayed data
//  * (including sorting, pagination, and filtering).
//  */
// export class TableExpertListDataSource extends DataSource<TableExpertListItem> {
//   data: TableExpertListItem[] = DATABACK.dataBack;
//   paginator: MatPaginator | undefined;
//   sort: MatSort | undefined;

//   constructor() {
//     super();
//   }

//   /**
//    * Connect this data source to the table. The table will only update when
//    * the returned stream emits new items.
//    * @returns A stream of the items to be rendered.
//    */
//   connect(): Observable<TableExpertListItem[]> {
//     if (this.paginator && this.sort) {
//       // Combine everything that affects the rendered data into one update
//       // stream for the data-table to consume.
//       return merge(
//         observableOf(this.data),
//         this.paginator.page,
//         this.sort.sortChange
//       ).pipe(
//         map(() => {
//           return this.getPagedData(this.getSortedData([...this.data]));
//         })
//       );
//     } else {
//       throw Error(
//         'Please set the paginator and sort on the data source before connecting.'
//       );
//     }
//   }

//   /**
//    *  Called when the table is being destroyed. Use this function, to clean up
//    * any open connections or free any held resources that were set up during connect.
//    */
//   disconnect(): void {}

//   /**
//    * Paginate the data (client-side). If you're using server-side pagination,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getPagedData(data: TableExpertListItem[]): TableExpertListItem[] {
//     if (this.paginator) {
//       const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//       return data.splice(startIndex, this.paginator.pageSize);
//     } else {
//       return data;
//     }
//   }

//   /**
//    * Sort the data (client-side). If you're using server-side sorting,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getSortedData(data: TableExpertListItem[]): TableExpertListItem[] {
//     if (!this.sort || !this.sort.active || this.sort.direction === '') {
//       return data;
//     }

//     return data.sort((a, b) => {
//       const isAsc = this.sort?.direction === 'asc';
//       switch (this.sort?.active) {
//         case 'nombreExperto':
//           return compare(a.nombre, b.nombre, isAsc);
//         case 'estado':
//           return compare(+a.estado, +b.estado, isAsc);
//         default:
//           return 0;
//       }
//     });
//   }
// }

// /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(
//   a: string | number,
//   b: string | number,
//   isAsc: boolean
// ): number {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
