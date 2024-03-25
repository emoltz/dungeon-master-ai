"use client"
import { Button } from '@/components/ui/button';
import { Race, DndClass } from '@/lib/types';
import React, { useState } from 'react';

interface SelectPropertyProps {
    data: DndClass[] | Race[];
}
export default function SelectProperty({ data }: SelectPropertyProps) {
    const [showData, setShowData] = useState(false)
    return (
        <>
            <Button onClick={() => setShowData(!showData)}>Show Data</Button>
            {showData &&
                <>hello?</>
            }
            {data.map((race, index) => (
                <div key={index}>
                    <h2>{race.name}</h2>
                </div>
            ))}

        </>
    )
}