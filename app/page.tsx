import { getRaces } from "@/lib/dndApiService"
import SelectProperty from "./SelectProperty";
import { GetAllResourcesList } from "@/lib/types";


export default async function Home() {
  const raceData = await getRaces();  

  return (
    <>
      {/* @ts-ignore */}
      <SelectProperty data={raceData.results} />

    </>
  )
}
