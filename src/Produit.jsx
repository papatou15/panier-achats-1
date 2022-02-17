import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit(props) {
    // console.log(props);
    // console.log('Nom du produit ', props.nom)
    let panier = props.panier;
    let setPanier = props.setPanier;
    let qte = 0;
    if(panier[props.pid]){
        qte = panier[props.pid].qte;
    }

    function ajouterAuPanier() {
        panier[props.pid] = {
            prix: props.prix,
            qte: 1
        };
        console.log("Panier : ", panier);
        //Notifier React que le panier a changé
        setPanier({...panier});
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + props.pid + ".webp"} alt={props.nom} />
            <div className="titre">{props.nom}</div> 
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    );
}