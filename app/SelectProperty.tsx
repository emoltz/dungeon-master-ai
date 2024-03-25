"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Race, DndClass, IndexItem } from '@/lib/types';
import React, { useState } from 'react';

interface SelectPropertyProps {
    data: IndexItem[];
}
export default function DisplayList({ data }: SelectPropertyProps) {

    return (
        <div className="flex flex-wrap gap-3">
            {data.map((item) => (
                <Card key={item.index} className="w-1/4 bg-slate-300 p-3 hover:bg-slate-200">
                    <h2>{item.name}</h2>
                    <p>{item.url}</p>
                </Card>
            ))}


        </div>
    )
}