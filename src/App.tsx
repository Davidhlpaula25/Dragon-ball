import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Characters } from './character/character';
import { fetchCharacterList } from './service/characterService';

function App() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  const header = (
    <div className="flex flex-wrap gap-5">
      <div className="flex-auto">
      
      </div>
    </div>
  );

  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
  );

  const imageBodyTemplate = (character: Characters) => {
    return (
      <Avatar
        image={character.image}
        shape="circle"
        className="mr-3"
        style={{ width: '100px', height: '130px' }}
      />
    );
  };

  useEffect(() => {
    const getCharacter = async () => {
      const result = await fetchCharacterList();
      setCharacters(result);
    };
    getCharacter();
  }, []);

  return (
    <>
      <DataTable
        value={characters}
        tableStyle={{ minWidth: '50rem' }}
        header={header}
        footer={footer}
      >
        <Column header="Imagem" body={imageBodyTemplate}></Column>
        <Column field="name" header="Name"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="race" header="Race"></Column>
        <Column field="affiliation" header="Affiliation"></Column>
        <Column field="description" header="Descrição"></Column>
      </DataTable>
    </>
  );
}

export default App;
