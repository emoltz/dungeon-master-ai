import { GetAllResourcesList, IndexItem, Race } from "./types";

export const BASE_URL = "https://www.dnd5eapi.co";
export const routes = {
    all_classes: "/api/classes/",
    all_races: "/api/races/",

}

export async function getClasses(): Promise<GetAllResourcesList> {
    const res = await fetch(BASE_URL + routes.all_classes);

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function getRaces(): Promise<GetAllResourcesList> {
    const res = await fetch(BASE_URL + routes.all_races);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function extractDataFromRaces(races: IndexItem[]): Promise<Race[]> {
    const racesInfo: Race[] = [];
    for (const race of races){
        const res = await fetch(BASE_URL + race.url);
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data: Race = await res.json();
        racesInfo.push(data);
    }
    return racesInfo;
}