import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from 'src/app/models/launch';
import { SharedService } from 'src/app/services/shared.service';
import { LaunchesService} from '../../services/launches.service';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  public missionSelected: string = '';

  launchesList$: Observable<Launch[]> | undefined;

  constructor(private _launches: LaunchesService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.launchesList$ = this._launches.watch().valueChanges.pipe(map((res) => res.data.launches));
  }

  missionDetail(mission: string) {
    this.missionSelected = mission;
    this.sharedService.sendClickEvent(mission);
  }
    
}
