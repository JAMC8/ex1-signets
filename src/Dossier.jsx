import BtnDeplacement from './BtnDeplacement';
import BtnOptions from './BtnOptions';
import './Dossier.scss';


export default function Dossier(props)
{
    

    return(
        <li className="Dossier">
            <BtnDeplacement/>
            <button>
                <img src=""/>
                <div className="info">
                    <p className="nomDossier">Nom du dossier</p>
                    <p className="dateModification">Modifié:</p>
                </div>
            </button>
            <BtnOptions/>
        </li>
    )
}