const Product = () => {
  return (
    <div className="product">
      <img src="src/assets/images/card.png" alt="" />
      <h4>Чизбургер-пицца</h4>
      <div className="product-categories">
        <ul className="product-categories__type product-dough">
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul className="product-categories__type product-size">
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="product-bottom">
        <span className="product-price">от 395 ₽</span>
        <button className="product-btn">+ Добавить <span>2</span></button>
      </div>
    </div>
  )
}
export default Product