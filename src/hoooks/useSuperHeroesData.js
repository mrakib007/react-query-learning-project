import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchSuperHeroes = () =>{
    return axios.get('http://localhost:4000/superheroes')
}

const addSuperHero = (hero) =>{
    return axios.post('http://localhost:4000/superheroes',hero)
}

export const useSuperHeroesData = (onSuccess,onError) => {
    return useQuery('super-heroes',fetchSuperHeroes,{
        onSuccess,
        onError,
        // select: (data) =>{
        //     const superHeroNames = data?.data?.map((hero)=> hero.name)
        //     return superHeroNames;
        // },
    })
};

export const useAddSuperHeroData = () =>{
    //for posting data to the json database
    const queryClient = useQueryClient();
    return useMutation(addSuperHero,{
        onSuccess: () =>{
            //with this, without any fetching button click, the
            //added data will be automatically fetched and shown in the page
            //here background refetch is initiated
            queryClient.invalidateQueries('super-heroes')
        },
    });
}