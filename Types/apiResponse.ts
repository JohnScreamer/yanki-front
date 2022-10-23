export interface statisticsType {
    personnel_units: number;
    tanks: number;
    armoured_fighting_vehicles: number;
    artillery_systems: number;
    mlrs: number;
    aa_warfare_systems: number;
    planes: number;
    helicopters: number;
    vehicles_fuel_tanks: number;
    warships_cutters: number;
    cruise_missiles: number;
    uav_systems: number;
    special_military_equip: number;
    atgm_srbm_systems: number;
}

export interface Data {
    date: string;
    day: number;
    resource: string;
    stats: statisticsType;
    increase: statisticsType;
}

export interface ILatestResponse {
    message: string;
    data: Data;
}

export interface exsectData {
    date: string;
    day: number;
    resource: string;
    stats: statisticsType;
}

export interface exsectResponse {
    message: string;
    data: exsectData;
}
/////////////

export interface PersonnelUnits {
    title: string;
    icon: string;
}

export interface Tanks {
    title: string;
    icon: string;
}

export interface ArmouredFightingVehicles {
    title: string;
    icon: string;
}

export interface ArtillerySystems {
    title: string;
    icon: string;
}

export interface Mlrs {
    title: string;
    icon: string;
}

export interface AaWarfareSystems {
    title: string;
    icon: string;
}

export interface Planes {
    title: string;
    icon: string;
}

export interface Helicopters {
    title: string;
    icon: string;
}

export interface VehiclesFuelTanks {
    title: string;
    icon: string;
}

export interface WarshipsCutters {
    title: string;
    icon: string;
}

export interface UavSystems {
    title: string;
    icon: string;
}

export interface SpecialMilitaryEquip {
    title: string;
    icon: string;
}

export interface AtgmSrbmSystems {
    title: string;
    icon: string;
}

export interface CruiseMissiles {
    title: string;
    icon: string;
}

export interface DataSVG {
    personnel_units: PersonnelUnits;
    tanks: Tanks;
    armoured_fighting_vehicles: ArmouredFightingVehicles;
    artillery_systems: ArtillerySystems;
    mlrs: Mlrs;
    aa_warfare_systems: AaWarfareSystems;
    planes: Planes;
    helicopters: Helicopters;
    vehicles_fuel_tanks: VehiclesFuelTanks;
    warships_cutters: WarshipsCutters;
    uav_systems: UavSystems;
    special_military_equip: SpecialMilitaryEquip;
    atgm_srbm_systems: AtgmSrbmSystems;
    cruise_missiles: CruiseMissiles;
}

export interface SVGResponse {
    message: string;
    data: DataSVG;
}
