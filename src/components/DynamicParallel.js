import React from 'react';
import axios from 'axios';
import { useQueries } from 'react-query';

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallel = ({heroIds}) => {
    //useQueries returns an array of query results
    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero',id],
                queryFn: () => fetchSuperHero(id), 
            }
        })
    )
    console.log({queryResults});
    return (
        <div>
            This is dynamic parallel with useQueries.
          <div> 
            </div> 
        </div>
    );
};

export default DynamicParallel;