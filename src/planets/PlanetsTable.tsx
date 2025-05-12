import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { fetchPlanetList } from '../service/planetaService';
import { Planets } from './planets';


function PlanetTable() {
  const [planets, setPlanets] = useState<Planets[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetchPlanetList();
      setPlanets(result);
    };
    getPlanets();
  }, []);

  const imageBodyTemplate = (planet: Planets) => (
    <img src={planet.image} alt={planet.name} width="100" className="border-round" />
  );

  const destroyedTemplate = (planet: Planets) => (
    planet.isDestroyed ? '🌌 Destruído' : '🟢 Ativo'
  );

  const header = <h2>🌍 Lista de Planetas</h2>;

  return (
    <div className="card">
      <DataTable value={planets} header={header} showGridlines tableStyle={{ minWidth: '60rem' }}>
        <Column header="Imagem" body={imageBodyTemplate}></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="description" header="Descrição"></Column>
        <Column header="Estado" body={destroyedTemplate}></Column>
      </DataTable>
    </div>
  );
}

export default PlanetTable;
