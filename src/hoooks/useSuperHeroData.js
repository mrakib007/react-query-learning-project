import axios from "axios"
import { useQuery,useQueryClient } from "react-query"

const fetchSuperHero = ({queryKey}) =>{
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const useSuperHeroData = (heroId) =>{
    const queryClient = useQueryClient()
    return useQuery(['super-hero',heroId],fetchSuperHero,{
        initialData: () =>{ //this initial data helps to remove loading state with every click on the superhero listing page.
            const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero =>
                 hero.id === parseInt(heroId))
            if(hero){
                return{
                    data: hero
                }
            }else{
                return undefined; //if this happens then react query will set this query to a hard loading state to prevent runtime error
            }
        }
    })
}