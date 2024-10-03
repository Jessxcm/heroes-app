import { useSearchParams } from 'react-router-dom';
import { useForm } from '../../auth/hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  /*const navigate = useNavigate();
  const location = useLocation();

  const { q =''} = queryString.parse( location.search );*/

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';

  const heroes = getHeroesByName(q);

  const showSearch = (q.length ===0 );
  const showError = (q.length >0 ) && heroes.length ===0 ;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = ( event )=>{
    event.preventDefault();

    //navigate(`?q=${ searchText}`);

    setSearchParams({q:searchText});

    console.log({ searchText });
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit } aria-label='form'>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange}
            ></input>

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
{/* 
          {
            (q === '')
            ? <div className="alert alert-primary">Search a hero</div>
            : ( heroes.length ===0 ) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}
          
          <div className="alert alert-primary" style={ {display: showSearch ? '': 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={ {display: showError ? '': 'none'}}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}></HeroCard>
            ))
          }
        </div>
      </div>
    </>
  );
};
