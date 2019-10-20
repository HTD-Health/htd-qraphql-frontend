import React from 'react'

function testQuery({loading, error, response}){
  console.log('loading', loading)
  console.log('error', error)
  console.log('response', response)
  if(loading){
    return <div>Loading...</div>
  }
  return <div>{response.helloWorld}</div>
}

export default testQuery