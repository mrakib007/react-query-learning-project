// import axios from 'axios';
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { useQuery } from "react-query";
import { useAddSuperHeroData, useSuperHeroesData } from "../hoooks/useSuperHeroesData";

// const fetchSuperHeroes = () =>{
//     return axios.get('http://localhost:4000/superheroes')
// }
const RQSuperHeroesPage = () => {
  const [name,setName] = useState('');
  const [alterEgo,setAlterEgo] = useState('');

  //mutate is needed to be called for post request
  const {mutate:addHero,isLoading:loading,isError:hasError,error:Error} = useAddSuperHeroData()
  const handleAddHeroClick = () =>{
    console.log({name,alterEgo});
    const hero = {name,alterEgo};
    addHero(hero);
  }
  const onSuccess = (data) => {
    //react query can pass the data or the error that is encountered while fetching in this callbacks. So we can pass that in the form of a parameter in the function.
    toast.success("Perform side effect after data fetching");
    console.log(data);
  };
  const onError = (error) => {
    toast.error("Perform side effect after data fetching");
    console.log(error);
  };
  //These codes are commented out because the work is done by custom hooks
  // const {isLoading,
  //     data,
  //     isError,
  //     error,
  //     refetch,
  //     isFetching} = useQuery('super-heroes',fetchSuperHeroes,{
  // cacheTime: 5000,
  // staleTime: 30000,
  // staleTime: 0,
  // refetchOnMount: true,
  // refetchOnMount: false,
  // refetchOnMount: 'always',
  // refetchOnWindowFocus: true, //always updates data whenever it is changed.
  //it can also be set as 'always' and false.
  // refetchInterval: false, default value
  // refetchInterval: 2000, //data will automatically being fetched after every 2 seconds
  // refetchIntervalInBackground: true, // data will be fetched in the background even when the browser is not in progress.
  // enabled: false, //data fetching is disabled by this and it will be enabled with user event.
  //     onSuccess: onSuccess, //callbacks used as a side effect
  //     onError: onError, //callbacks used as a side effects
  //     select: (data) => {
  //         // select receives data as an argument
  //         const superHeroNames = data?.data?.map(hero => hero.name)
  //         console.log(superHeroNames) //map function returns an array
  //         return superHeroNames;
  //     },
  // })

  //The Custom Hook is here
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  
  if(loading){
    return <h2>Loading inside useMutation</h2>
  } 
  if(hasError){
    return <h2>This error is inside useMutation hook and the error is 
      {Error.message}
    </h2>
  } 
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  console.log(isLoading, isFetching);
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h2>RQSuper Hero</h2>
      <div>
        <input type="text"
         value={name} 
         onChange={(e)=>setName(e.target.value)}/>
        <input type="text"
         value={alterEgo} 
         onChange={(e)=>setAlterEgo(e.target.value)} id="" />
         <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>;
      })}

      {/* {data?.map((heroName) => {
        return <div key={{ heroName }}>{heroName}</div>;
      })} */}
    </div>
  );
};

export default RQSuperHeroesPage;
