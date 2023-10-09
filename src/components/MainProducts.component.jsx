import Product from "./Product.component"

const MainContent = () => {
  return (
    <div className="main-products">
      <h2 className="main-products__title">Все пиццы</h2>
      <div className="main-products__content">
        <Product />
      </div>
    </div>
  )
}

export default MainContent