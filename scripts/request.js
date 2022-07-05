const getPuzzle=async (wordCount)=>{
  const response=await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
         
  if(response.status === 200){
    const data= await  response.json()
    return data.puzzle
  }else{
     throw new Error('Unable to find puzzle.')
  }

}
const getCurrentCountry = async ()=>{
    const location = await getLocation()
    const country= await getCountry(location.country)
    return country
}

const getCountry= async (countryCode)=>{

    const response= await fetch('https://restcountries.com/v3.1/all')
    if(response.status === 200){
        const data= await response.json()
        return country = data.find((country) => country.cca2 === countryCode)
        }else{
          throw new Error('Unable to find puzzle.')
        }

    }
 


const getLocation =async  ()=>{

    const response = await fetch('https://ipinfo.io/json?token=76f4f9820334cd')
    if(response.status === 200){
        return response.json()
        
        }else{
         throw new Error('unable to find location.')
        }
}




