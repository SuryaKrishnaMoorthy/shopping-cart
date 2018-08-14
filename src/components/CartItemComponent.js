import React from 'react'

const CartItemComponent = ({ cardItem }) => {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{ cardItem.product.name }</div>
        <div class="col-md-2">${ cardItem.product.priceInCents }</div>
        <div class="col-md-2">{ cardItem.id }</div>
      </div>
    </div>
  )
}

export default CartItemComponent
