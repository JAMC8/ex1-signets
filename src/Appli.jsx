import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import PiedDePage from './PiedDePage';

function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <section className="contenuPrincipal">
        <ListeDossiers/>
      </section>
      <PiedDePage/>
    </div>
  );
}

export default Appli;
