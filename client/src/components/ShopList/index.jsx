import React from 'react';

// Mock data for the shops
const shops = [
    { id: 1, name: 'Blackrock Coffee Bar' },
    { id: 2, name: 'Starbucks' },
    { id: 3, name: 'Dutch Bros. Coffee' },
    { id: 4, name: 'Dunkin' },
    { id: 5, name: 'Bosa Donuts' },
    // Add more shops here
];

function ShopList({ onShopSelect }) { // Add an `onShopSelect` prop for selecting a shop
    return (
        <div>
            <h2>Shop List</h2>
            <ul>
                {shops.map((shop) => (
                    <li key={shop.id} onClick={() => onShopSelect(shop)}>
                        {shop.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShopList;
{
    shops.map((shop) => (
        <li key={shop.id}>
            <button onClick={() => onShopSelect(shop)}>
                {shop.name}
            </button>
        </li>
    ))
}