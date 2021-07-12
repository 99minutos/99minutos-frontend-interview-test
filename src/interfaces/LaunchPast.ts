
export interface launchesPastQuery {
    launchesPast: LaunchesPast[];
}

export interface LaunchesPast {
    mission_name:      string;
    launch_date_local: Date;
    launch_site:       LaunchSite;
    links:             Links;
    rocket:            Rocket;
    ships:             Ship[];
    details:           null | string;
}

export interface LaunchSite {
    site_name_long: string;
}

export interface Links {
    article_link: null | string;
    video_link:   null | string;
}

export interface Rocket {
    rocket_name:  string;
    first_stage?:  FirstStage;
    second_stage: SecondStage;
}

export interface FirstStage {
    cores: CoreElement[];
}

export interface CoreElement {
    flight: number;
    core:   SubCore;
}

export interface SubCore {
    reuse_count: number;
    status:      null | string;
}


export interface SecondStage {
    payloads: Payload[];
}

export interface Payload {
    payload_type:     string;
    payload_mass_kg:  number | null;
    payload_mass_lbs: number | null;
}

export interface Ship {
    name:      string;
    home_port: string;
    image:     string;
}

export enum HomePort {
    PortCanaveral = "Port Canaveral",
    PortOfLosAngeles = "Port of Los Angeles",
}
