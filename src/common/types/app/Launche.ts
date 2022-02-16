export interface LauncheType {
  id: number
  mission_name: string
  launch_date_local: string
  launch_site: {
    site_name_long: string
  },
  "links": Links;
  "ships": Ships[],
  "details": string | null
}

export interface Ships  {
  "name": string
  "home_port": string
  "image": string
}

export interface Links {
  "article_link": null | string
  "video_link":  null | string
  "mission_patch": null | string
}
