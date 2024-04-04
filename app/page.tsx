import { extractDataFromRaces, getRaces } from "@/lib/dndApiService";
import SelectProperty from "./SelectProperty";
import { GetAllResourcesList, IndexItem, Race } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const raceDataRaw: GetAllResourcesList = await getRaces();
  const raceData: IndexItem[] = raceDataRaw.results;
  const raceDataIndividual: Race[] = await extractDataFromRaces(raceData);

  return (
    <>
      <div className="p-5">
        <SelectProperty raceData={raceData} racesInfo={raceDataIndividual} />
        <div className="p-3">
          <Separator />
        </div>
      </div>
    </>
  );
}
