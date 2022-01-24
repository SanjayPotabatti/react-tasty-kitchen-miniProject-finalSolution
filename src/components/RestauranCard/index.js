import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestauranCard = props => {
  const {restaurantDetails} = props
  const {id, cuisine, imageUrl, name, rating, totalReviews} = restaurantDetails
  return (
    <li testid="restaurant-item" className="restCardItem">
      <Link to={`/restaurant/${id}`}>
        <div className="d-flex flex-row restCard mb-2">
          <div>
            <img src={imageUrl} className="cardImg" alt="restaurant" />
          </div>

          <div className="d-flex flex-column p-2">
            <h1 className="restName m-0">{name}</h1>
            <p className="restCusine m-0 ml-1">{cuisine}</p>
            <div className="d-flex flex-row ml-1">
              <AiFillStar color="#FFCC00" />
              <p className="restName pr-1">{rating}</p>
              <h1 className="restCusine1 m-0">({totalReviews} ratings)</h1>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default RestauranCard
