import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SharedService {

  private subject = new Subject<any>();

  sendClickEvent(missionId: string) {
    this.subject.next(missionId);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}