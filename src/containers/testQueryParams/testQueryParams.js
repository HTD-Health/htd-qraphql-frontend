import React, {useState} from 'react'
import { Button, Input } from 'semantic-ui-react'
import TEST_QUERY_PARAMS from './testQueryParams.gql'

export const TestQueryParams = ({client}) => {
  const [name, setName] = useState('')
  const [apiData, setApiData] = useState('')
  const changeName = (e) => setName(e.target.value)
  const testQuery = async () => {
    const {data} = await client.query({
      query: TEST_QUERY_PARAMS,
      variables: { name }
    })
    setApiData(data && data.helloWorldParams)
  }
  return <div>
    <Input value={name} onChange={changeName} /> 
    <Button onClick={testQuery}>Test params</Button>
    {apiData && apiData.length > 0 && <div>{apiData}</div>}
  </div>
}

export default TestQueryParams