import { Button } from "@/components/ui/button";

async function getClasses() {
  const res = await fetch("https://www.dnd5eapi.co/api/classes/");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

async function getRaces() {
  const res = await fetch("https://www.dnd5eapi.co/api/races/");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  const classes = await getClasses();
  const races = await getRaces();
  return (
    <>
      Choose Your Character
      <div className="flex gap-2 flex-wrap">
        {classes.results.map((item: any) => (
          <Button key={item.index}>{item.name}</Button>
        ))}
      </div>
      <div className="">Choose Your Race</div>
      <div className="flex gap-3 flex-wrap">
        {races.results.map((item: any) => (
          <Button key={item.index}>{item.name}</Button>
        ))}
      </div>
    </>
  );
}
