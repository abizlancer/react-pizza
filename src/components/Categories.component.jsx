import { Fragment, useState } from "react";




const Categories = () => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortBy = ['популярности', 'по цене', 'по алфавиту']

  const [categoryListActive, setCategoryListActive] = useState(false)
  const [sortByCategoryActive, setSortByCategory] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)  

  const setActiveCategory = (index) => {
    setActiveIndex(index)
  }
  const setActiveSortByCategory = (index) => {
    setSortByCategory(index)
    // Close popup list
    categoryListToggle()
  }
  const categoryListToggle = () => {
    setCategoryListActive(!categoryListActive)
  }

  return (
    <Fragment>
      <div className="categories">
        <ul className="categories__items">
          {categories.map((category, key) => {
            return <li className={`categories__items--btn ${key == activeIndex ? 'active': ''}`} key={key} onClick={() => setActiveCategory(key)}>{category}</li>;
          })}
        </ul>
        <div className="categories__sort">
            <span>
              <img src="./src/assets/images/chevron-up.svg" alt="chevron-up" />
              Сортировка по:
            </span>
            <div className="categories__sort--popup">
              <button className="categories__sort--popup-selected" onClick={categoryListToggle}>{sortBy[sortByCategoryActive]}</button>
              <ul className={`categories__sort--popup__list ${categoryListActive ? 'active' : ''}`}>
                {sortBy.map((item, key) => (
                  <li className={`${sortByCategoryActive === key ? 'active' : ''}`} onClick={() => setActiveSortByCategory(key)} key={key}>{item}</li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
