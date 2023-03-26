import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () =>{
    return axios.get('http://localhost:4000/superheroes')
}
const RQSuperHeroesPage = () => {
    const {isLoading,
        data,
        isError,
        error,
        refetch,
        isFetching} = useQuery('super-heroes',fetchSuperHeroes,{
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
            enabled: false, //data fetching is disabled by this and it will be enabled with user event.
        })

    if(isLoading || isFetching){
        return <h1>Loading...</h1>
    }
    console.log(isLoading,isFetching);
    if(isError){
        return <h1>{error.message}</h1>
    }
    return (
        <div>
            <h2>RQSuper Hero</h2>
            <button onClick={refetch}>Fetch Heroes</button>
            {
                data?.data.map(hero =>{
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </div>
    );
};

export default RQSuperHeroesPage;