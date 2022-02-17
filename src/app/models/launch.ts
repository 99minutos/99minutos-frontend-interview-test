import { Link } from './link';

export interface Launch {
  id:                string;
  mission_name:      string;
  details:           string;
  links:             Link;
  launch_date_local: Date;
}