import { toast } from "react-semantic-toasts"

const prepareMessage = (error) => {
  if(error !== undefined) {
    if(error.graphQLErrors.length > 0) {
      return error.graphQLErrors
    }
    return error.networkError.result.errors[0].message
  }
  return ''
}


export default  (error) => {
  const message = prepareMessage(error)
  if(message === '') return 
  console.log(message)
  toast({
    type: 'error',
    title: 'GraphQL error',
    icon: 'ambulance',
    description: message,
    time: 0,
    size: 'small',
    onDismiss: () => {},
    onclose: () => {}
  })
}
