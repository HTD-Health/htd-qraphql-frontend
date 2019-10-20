import { toast } from "react-semantic-toasts"

const prepareMessage = (error) => {
  return "Error"
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
