import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react'

function App() {
  const etatPanier = useState({});

  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  console.log("L'état panier: ", panier)

  // let panier = {
    // prd0003:{
    //     prix: 13.95,
    //     qte: 1
    // },
    // prd0001:{
    //   prix: 9.95,
    //   qte: 2
    // },
    // prd0002:{
    //   prix: 11.95,
    //   qte: 10
    // }
  // }

// let compteurClic = 0;
  const [compteur, setCompteur] = useState(0);

  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <div>
        <span>Nombre de clics: <i>{compteur}</i></span>
        <button onClick={() => setCompteur(compteur+1)}>Cliquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
