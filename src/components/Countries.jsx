import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";


const Countries = (props) => {

const [data, setData] = useState([]);//on récupère les donnée dans un tableau vide
const [sortData,setSortData] = useState([])// permet de trie des données

// le useEffect permet de généer des effets

useEffect(() => {
        
            axios.get(
                "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
            )
         .then((res) => setData(res.data))
    const sortedCountry = ()=> {
        setSortData()
    }
},[] )



    return (
        <div className="countries_liste">
            {data.map( (country) =>  <Card country= {country} key= {country.name} /> )}

            
        </div>
    );
}
export default Countries;