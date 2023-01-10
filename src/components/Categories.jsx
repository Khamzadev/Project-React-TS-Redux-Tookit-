import React from 'react';
  
function Categories({value, onChangeCategory}) {
 // const [activeIndex, setActiveIndex] = React.useState(0);


  const categories = ['Всё', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const onChangeCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div class="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
