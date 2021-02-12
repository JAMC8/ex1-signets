import BtnDeplacement from './BtnDeplacement';
import BtnOptions from './BtnOptions';
import './Dossier.scss';


export default function Dossier(props)
{
    const id = props.id;
    const titre = props.titre;
    const dateModif = props.dateModif;
    const couleur = props.couleur;

    console.log(couleur);

    return(
        <li className="Dossier">
            <BtnDeplacement/>
            <button className="btnDossier" style={{backgroundColor: couleur}}>
                <img src={"images-dossiers/" + id + ".webp"} alt="" />
                <div className="info">
                    <p className="nomDossier">{titre}</p>
                    <p className="dateModification">Modifié: {dateModif}</p>
                </div>
            </button>
            <BtnOptions/>
        </li>
    )
}