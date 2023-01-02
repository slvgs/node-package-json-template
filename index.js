import {countries} from "./countries.js"




//console.log(countries)

const busca = process.argv[2]

if(!busca){
    console.log("Faltou o argumento de busca")
}else{

    const resultado = countries.filter((countrie) => {

        return countrie.name.includes(busca)
    
    })
    
    console.log(resultado)

}


