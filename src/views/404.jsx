import { useRouteError } from 'react-router-dom';
function Error404(){
  const error = useRouteError();

  return(
    <div className="container-fluid mt-5 d-flex flex-column justify-content-center  align-items-center align-self-baseline">
      <h1>Wadus!!! Error  {error.status}</h1>
      <p>{error.status} {error.data}</p>
    </div>
  )
};
export default Error404;