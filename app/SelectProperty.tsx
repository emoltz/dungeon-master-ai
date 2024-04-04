"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Race, DndClass, IndexItem } from "@/lib/types";
import React, { useState } from "react";

interface SelectPropertyProps {
  data: IndexItem[];
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
export default function DisplayList({ data, racesInfo }: SelectPropertyProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {data.map((item) => (
        <Card
          key={item.index}
          className="w-1/4 bg-slate-300 p-3 hover:bg-slate-200"
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
