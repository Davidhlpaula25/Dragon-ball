'use client'

import { Characters } from "../character/character"
import { fetchCharacterList } from "@/service/characterService"
import { useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';

export default function CharactersTable() {

  const [characters, setCharacters] = useState<Characters[]>([])

  useEffect(() => {
    const getCharacters = async () => {
      const result = await fetchCharacterList();
      setCharacters(result);
    };
    getCharacters();
  }, [])

  const imageBodyTemplate = (characters: Characters) => {
    return <Avatar image={characters.image} size="xlarge" shape="circle" ></Avatar>
  }

  
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">Characters</span>
    </div>
);

  return (

    <div className="card">
      <DataTable value={characters} header={header} showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="race" header="Race"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="affiliation" header="Affiliation"></Column>
      </DataTable>
    </div>
  )
}