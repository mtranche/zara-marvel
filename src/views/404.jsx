import { useRouteError } from 'react-router-dom';
import Header
 from '../components/wadus';
function Error404(){
  const error = useRouteError();

  return(
    <>
      <Header />      
      <div  className='marvel-container'>
        <h1> Error  {error.status}</h1>
        <p>{error.status} {error.data}</p>
      </div>
    </>
  )
};
export default Error404;