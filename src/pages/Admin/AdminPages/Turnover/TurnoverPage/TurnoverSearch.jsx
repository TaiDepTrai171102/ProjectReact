import { Link } from 'react-router-dom';
import AllUsers from '../TurnoverPage/components/AllUser';


function TurnoverSearch() {
  return (
   <>
  <h2 className='aaaaUser '><Link to="/add" style={{ margintop: 50, textDecoration: 'none'}}>Add User</Link></h2>
   <AllUsers/>
   </>
  );
}

export default TurnoverSearch;