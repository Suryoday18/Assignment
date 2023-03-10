import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name, vendor, img, price, available } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{vendor}</p>
               {available > 0 ? <p className='item-text'>In Stock:{available}</p> : <p className='item-out-of-stock-text'> Sorry out of stock</p>} 
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;