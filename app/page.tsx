import { extractDataFromRaces, getRaces } from "@/lib/dndApiService";
import SelectProperty from "./SelectProperty";
import { GetAllResourcesList, IndexItem, Race } from "@/lib/types";

export default async function Home() {
  const raceDataRaw: GetAllResourcesList = await getRaces();
  const raceData: IndexItem[] = raceDataRaw.results;
  const raceDataIndividual: Race[] = await extractDataFromRaces(raceData);

  return (
    <>
      <SelectProperty raceData={raceData} racesInfo={raceDataIndividual} />
      
    </>
  );
}
