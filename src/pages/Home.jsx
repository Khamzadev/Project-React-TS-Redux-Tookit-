import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'пулярности',
    sortProperty: 'raiting',
  });
  //console.log(sortType, categoryID);
  //console.log(sortType.sortProperty);
  React.useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    console.log(order)
    const sortBy = sortType.sortProperty.replace('-', '');
    console.log(sortBy)
    const category = categoryID > 0 ? `category=${categoryID}` : '';

    setIsLoading(true);

    fetch(
      `https://61bdf7c82a1dd4001708a1cf.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order})}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortType]);

  return (
    <div className="container">
      <div class="content__top">
        <Categories value={categoryID} onChangeCategory={(i) => setCategoryID(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton kwy={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
