import { getRaces } from "@/lib/dndApiService"
import SelectProperty from "./SelectProperty";
import { GetAllResourcesList } from "@/lib/types";


export default async function Home() {
  const raceData = await getRaces();

  return (
    <>
      <div className="p-3">
        <SelectProperty data={raceData.results} />
      </div>


    </>
  )
}
