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
        {/* <SelectProperty raceData={raceData} racesInfo={raceDataIndividual} /> */}

        <div className="h-screen flex flex-col">
          <div className="flex-1 flex">
            <div className="flex-1 bg-red-200">
              {/* Content for top left section */}
            </div>
            <div className="flex-1 bg-blue-200">
              {/* Content for top right section */}
            </div>
          </div>
          <div className="flex-1 bg-green-200">
            {/* Content for bottom section */}
          </div>
        </div>
      </div>
    </>
  );
}
