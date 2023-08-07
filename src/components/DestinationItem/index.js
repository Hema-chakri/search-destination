// Write your code here
const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
