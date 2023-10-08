import { Fragment } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <Fragment>
      <div className="categories">
        <div className="categories__items">
          {categories.map((category, key) => {
            return <button className="categories__items--btn" key={key}>{category}</button>;
          })}
        </div>
        <div className="categories__sort">
            <span>
              <img src="./src/assets/images/chevron-up.svg" alt="chevron-up" />
              Сортировка по:
            </span>
            <div className="categories__sort--popup">
              <button className="categories__sort--popup-selected">популярности</button>
              <ul className="categories__sort--popup__list">
                <li className="active">популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
              </ul>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
