import BtnDeplacement from './BtnDeplacement';
import BtnOptions from './BtnOptions';
import './Dossier.scss';


export default function Dossier(props)
{
    const id = props.id;
    const titre = props.titre;
    const dateModif = props.dateModif;

    return(
        <li className="Dossier">
            <BtnDeplacement/>
            <button>
                <img src={"images-dossiers/" + props.id + '.webp'} alt="" />
                <div className="info">
                    <p className="nomDossier">{titre}</p>
                    <p className="dateModification">Modifié: {dateModif}</p>
                </div>
            </button>
            <BtnOptions/>
        </li>
    )
}