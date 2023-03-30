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
        onSuccess: (data) =>{
            //here data refers to the entire response to the post request
            queryClient.setQueryData('super-heroes',(oldQueryData)=>{
                //oldQueryData refers what is present in the query cache
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data,data.data] //data.data refers the hero object of the mutation response
                }
            }) //this function is used for updating the query cache

            //this is for invalidateQueries
            //with this, without any fetching button click, the
            //added data will be automatically fetched and shown in the page
            //here background refetch is initiated

            // queryClient.invalidateQueries('super-heroes')

            //with this invalidateQueries there will be an additional network request
            //but it returns an object containing the same data we are getting by that request.
            //so there is a room for improvement
        },
    });
}