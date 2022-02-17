import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from 'src/app/models/launch';
import { SharedService } from 'src/app/services/shared.service';
import { MissionDetailService } from '../../services/missions.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  clickEventsubscription: Subscription | undefined;
  missionDetail$: Observable<Launch> | undefined;

  constructor(private _mission: MissionDetailService, private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe( async data => {
      this.getDetail(data);
    });
  }

  ngOnInit(): void {
  }

  getDetail(missionId: string) {
    this.missionDetail$ = this._mission.watch({id: missionId}).valueChanges.pipe(map((res) => res.data.launch));
  }


}
