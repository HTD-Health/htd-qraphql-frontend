import React, {useState} from 'react'
import { Button, Input } from 'semantic-ui-react'
export const TestQueryParams = ({client}) => {
  const [name, setName] = useState('')
  const [apiData, setApiData] = useState('')
  const changeName = (e) => setName(e.target.value)
  const testQuery = async () => {  }
  return <div>
    <Input value={name} onChange={changeName} /> 
    <Button onClick={testQuery}>Test params</Button>
    {apiData && apiData.length > 0 && <div>{apiData}</div>}
  </div>
}

export default TestQueryParams