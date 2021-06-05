import { useSelector } from 'react-redux'

import {
  selectReviews
} from 'store/anime'
import {
  ReviewCard
} from 'components'
import {
  checker
} from 'helpers'
import './style.less'

const Reviews = () => {
  const reviews = useSelector(selectReviews)

  return (
    <div>
      {checker.isFetched(reviews)
        ? reviews.data.slice(0, 2).map(review => (
          <div key={review.mal_id} className='mb-4 sm-mb-2'>
            <ReviewCard review={review}/>
          </div>
        ))
        : Array.from(Array(2).keys()).map(i => (
          <div key={i} className='mb-4 sm-mb-2'>
            <ReviewCard loading={reviews.loading}/>
          </div>
        ))}
    </div>
  ) 
}

export default Reviews;