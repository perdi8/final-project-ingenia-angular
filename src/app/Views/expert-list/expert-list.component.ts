import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExpertList } from 'src/app/Models/expert/expert.model';
import { ExpertListService } from 'src/app/services/expert-list-service/expert-list.service';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.scss'],
})
export class ExpertListComponent implements OnInit {
  expertListData: ExpertList[] = [];
  listSubscription: Subscription = new Subscription();

  @Output() contactsEmitter: EventEmitter<any[]> = new EventEmitter();

  constructor(
    private expertListService: ExpertListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listSubscription = this.expertListService.getAllExperts().subscribe(
      (result: any) => {
        this.expertListData = result;

        this.contactsEmitter.emit(this.expertListData);
      },
      (error) => {
        console.error(`error caught in component Contact URL: ${error}`);
      }
    );
  }
}
