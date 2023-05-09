import React, { useState } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'

export default function App() {
  const [shoppingPlan, setShoppingPlan] = useState([
    {
      name: 'PakNSave',
      items: ['Item 1', 'Item 2', 'Item 3'],
    },
    { name: 'Countdown', items: ['Item 4'] },
    { name: 'Bunnings', items: ['Item 5'] },
  ])

  function addNewItem(item, shop) {
    shoppingPlan.find((x) => x.name === shop).items.push(item)
    setShoppingPlan(shoppingPlan)
    console.log(shoppingPlan)
  }

  function removeItem(item, shop) {
    let items = shoppingPlan.find((x) => x.name === shop).items
    shoppingPlan
      .find((x) => x.name === shop)
      .items.splice(items.indexOf(item), 1)
    setShoppingPlan(shoppingPlan)
    console.log(shoppingPlan)
  }

  return (
    <main>
      <Header />

      <div className="container">
        {shoppingPlan.map((shop, index) => (
          <ShoppingList
            items={shop.items}
            name={shop.name}
            key={index}
            addNew={addNewItem}
            remove={removeItem}
          />
        ))}
      </div>
    </main>
  )
}
