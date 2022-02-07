export interface ILaunch {
    mission_name: string,
    launch_date_local: string,
    launch_site: ILaunchSite,
    links: ILinks,
    rocket: IRocket

}

interface ILaunchSite {
    site_name_long: string
}

interface ILinks {
    article_link: null | string,
    video_link: string
}

interface IRocket {
    rocket_name: string;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}

interface IFirstStage {
    cores:
        ICores[]

}

interface ICores {
    flight: number;
    core: ICore;
}

interface ICore {
    reuse_count: number;
    status: string;
}

interface ISecondStage {

    payloads:
        IPayloads[]


}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}