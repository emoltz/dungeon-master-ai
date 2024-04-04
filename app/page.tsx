import { getRaces } from "@/lib/dndApiService"
import SelectProperty from "./SelectProperty";
import { GetAllResourcesList, IndexItem } from "@/lib/types";


export default async function Home() {
  const raceDataRaw = await getRaces();  
  const raceData: IndexItem[] = raceDataRaw.results;

  return (
    <>
      <SelectProperty data={raceData} />

    </>
  )
}
