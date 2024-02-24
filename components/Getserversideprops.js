import { API_KEY, CONTEXT_KEY } from '@/keys';
import React from 'react'



function Getserversideprops({result}) {
  console.log(result)
  return (
    <div>getserversideprops</div>
  )
}
export default Getserversideprops


export async function getServerSideProps(context){

  const usedummydata = false;
  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then((response) => response.json());
  console.log(data)
  return {
    props:{
      result:data
    }
  }

}




