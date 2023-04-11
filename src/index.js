//import { heroes } from  './Data/heroes';
//import {heroes} from './Data/heroes'; escribir imr;

import { heroes } from "./Data/heroes";

//const getHeroeById = (id) => {
   // return heroes.find( (heroe) => {
       // if ( heroe.id === id ) {
           // return true;
       // } else {
         //   return false;
       // }
   // });
//}

const getHeroeById = (id) =>  heroes.find( (heroe) => heroe.id === id)

console.log(getHeroeById(2));




