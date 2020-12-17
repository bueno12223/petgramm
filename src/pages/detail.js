import React from 'react'
import { PhotoCardWithQuery } from '../containers/photoCardWithQuery'
import { withRouter } from 'react-router-dom'

function Detail (props) {
  const { id } = props.match.params
  return (
    <PhotoCardWithQuery id={id} />
  )
}
export default withRouter(Detail)
