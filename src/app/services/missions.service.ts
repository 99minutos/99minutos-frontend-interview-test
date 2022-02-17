import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Launch } from '../models/launch';

export interface Response {
  launch: Launch;
}

@Injectable()
export class MissionDetailService extends Query<Response> {
	document = gql`
    query MissionDetailService($id: ID!){
      launch(id: $id) {
        links {
          flickr_images
          article_link
          wikipedia
          mission_patch
        }
        details
        mission_name
      }
    }
	`;
}
