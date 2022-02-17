import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { Launch } from '../models/launch';

export interface Response {
  launches: Launch[];
}

@Injectable()
export class LaunchesService extends Query<Response> {
  document = gql`
    {
      launches(limit: 10) {
        id
        mission_name
        details
        links {
          mission_patch
          wikipedia
        }
        launch_date_local
      }
		}
	`;
}
