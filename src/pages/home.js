import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { withRouter } from 'react-router-dom'

function Home (props) {
  const { id } = props.match.params
  console.log(parseFloat(id))
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={parseFloat(id)} />
    </>
  )
}
export default withRouter(Home)
