// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsData} = props
  const {headerText, description, className} = bannerCardsData

  return (
    <div className={`${className} banner-card-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-button" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
