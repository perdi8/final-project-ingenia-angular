import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogDeleteTagComponent } from 'src/app/Components/dialog-delete-tag/dialog-delete-tag.component';
import { Tag } from 'src/app/Models/tag/tag.model';
import { TagListService } from 'src/app/services/tag-list/tag-list-service.service';

@Component({
  selector: 'app-tag-list-view',
  templateUrl: './tag-list-view.component.html',
  styleUrls: ['./tag-list-view.component.scss'],
})
export class TagListViewComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'creador',
    'fecha-creacion',
    'delete',
  ];

  saveId: number = 0;
  tagWithId: any = {};
  tagList: any = [];
  dataSource: MatTableDataSource<Tag>;

  page_size: number = 10;
  page_number: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tagListService: TagListService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.tagList);
  }

  ngOnInit(): void {
    this.tagListService.getTagList().subscribe((response) => {
      this.tagList = response;
    });
  }
  ngDoCheck() {
    this.dataSource = this.tagList;
  }

  applyFilterEtiquetaNombre(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.tagListService.getTagByNombre(filterValue).subscribe((result) => {
      if (result[0] == undefined) {
        this.tagListService.getTagList().subscribe((response) => {
          this.tagList = response;
        });
      } else {
        this.tagList = result;
      }
    });
  }
  applyFilterEtiquetaCreacion(event: any) {}

  borrarEtiqueta(id: any) {
    this.saveId = id;
    this.tagWithId = this.tagList[id];

    this.tagListService
      .borrarEtiqueta(this.tagWithId.id)
      .subscribe((response) => {
        // window.location.reload();
        this.ngOnInit();
      });
  }

  openDialog(i: any) {
    const dialogRef = this.dialog.open(DialogDeleteTagComponent, {});

    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog output:', data);

      if (data === 'Borrado') {
        this.borrarEtiqueta(i);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handlePage(e: any) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex;

    this.tagListService
      .getTagListWithLimit(this.page_size)
      .subscribe((response) => {
        this.tagList = response;
      });
  }

  get listaEtiquetas() {
    return this.tagList;
  }
}
