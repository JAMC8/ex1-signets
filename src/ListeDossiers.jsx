import Dossier from './Dossier';
import './ListeDossiers.scss';

export default function ListeDossiers(props)
{
    return(
        <div className="ListeDossiers">
            <ul>
                <Dossier/>
            </ul>
        </div>
    )
}