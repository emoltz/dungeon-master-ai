"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Race, DndClass, IndexItem } from "@/lib/types";
import React, { useState } from "react";

interface SelectPropertyProps {
  raceData: IndexItem[];
  racesInfo: Race[];
}

function getRaceInfo(index: string, racesInfo: Race[]): Race | undefined {
  for (const race of racesInfo) {
    if (race.index === index) {
      return race;
    }
  }
  return undefined;
}
export default function DisplayList({
  raceData: data,
  racesInfo,
}: SelectPropertyProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {data.map((item) => (
        <Card
          key={item.index}
          className=" bg-slate-300 p-3 hover:bg-slate-200 text-center cursor-pointer"
          onClick={() => {
            const race = getRaceInfo(item.index, racesInfo) ?? "N/A";
            console.log(race);
          }}
        >
          <h2>{item.name}</h2>
        </Card>
      ))}
    </div>
  );
}
