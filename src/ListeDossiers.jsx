import Dossier from './Dossier';
import './ListeDossiers.scss';
import tabDossiers from './data/dossiers.json';

export default function ListeDossiers(props)
{
    return(
        <div className="ListeDossiers">
            <ul>
                {tabDossiers.map( dossier =>
                    <Dossier id={dossier.id} titre={dossier.titre} couleur={dossier.couleur} dateModif={dossier.dateModif} key={dossier.id} /> 
                )}
                
            </ul>
        </div>
    )
}