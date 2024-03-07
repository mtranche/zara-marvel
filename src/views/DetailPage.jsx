import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Detail from '../components/Detail';

function DetailPage(){
  const characterId = useParams();
  return(
    <>
      <Header />
      <Detail id={characterId} />
    </>
  );
};
export default DetailPage;