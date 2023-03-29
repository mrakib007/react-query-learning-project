import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () =>{
    return axios.get('http://localhost:4000/superheroes');
}
const fetchFriends = () =>{
    return axios.get('http://localhost:4000/friends');
}
const ParallelQueries = () => {
    const {data: superHeroes} = useQuery('super-heroes',fetchSuperHeroes);
    const {data: friends} = useQuery('friends',fetchFriends);
    
    return (
        <div>
            <h2>Parallel Queries</h2>
            <h2>This query is for super heroes</h2>
            {
                superHeroes?.data.map((name)=>{
                    return <h2 key={name.id}>{name.name}</h2>
                })
            }

            <h2>This query is for friends</h2>
            {
                friends?.data.map((friend)=>{
                    return <h2 key={friend.id}>{friend.name}</h2>
                })
            }
        </div>
    );
};

export default ParallelQueries;