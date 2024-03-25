import { GetAllResourcesList } from "./types";

export async function getClasses(): Promise<GetAllResourcesList> {
    const res = await fetch("https://www.dnd5eapi.co/api/classes/");

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function getRaces(): Promise<GetAllResourcesList> {
    const res = await fetch("https://www.dnd5eapi.co/api/races/");
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}