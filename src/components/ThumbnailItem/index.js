// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, key, updateImgId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = itemDetails

  const activeImg = isActive ? 'active-thumbnail-img' : ''

  const onChangeImg = () => {
    updateImgId(id)
  }

  return (
    <li className={`list-container ${key}`}>
      <button onClick={onChangeImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeImg}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
