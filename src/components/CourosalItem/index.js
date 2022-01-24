import './index.css'

const CourosalItem = props => {
  const {eachImage} = props
  const {imageUrl, id} = eachImage
  return (
    <li key={id}>
      <img src={imageUrl} alt="offer" className="carousalItemImage" />
    </li>
  )
}
export default CourosalItem
