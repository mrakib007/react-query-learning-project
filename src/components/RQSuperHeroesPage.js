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
        isFetching} = useQuery('super-heroes',fetchSuperHeroes,{
            // cacheTime: 5000,
            // staleTime: 30000,
            staleTime: 0
        })

    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(isLoading,isFetching);
    if(isError){
        return <h1>{error.message}</h1>
    }
    return (
        <div>
            <h2>RQSuper Hero</h2>
            {
                data?.data.map(hero =>{
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </div>
    );
};

export default RQSuperHeroesPage;