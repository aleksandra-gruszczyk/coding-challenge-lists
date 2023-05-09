import Header from './Header'
import ShoppingList from './ShoppingList'

export default function App() {
  let shoppingPlan = [
    {
      name: 'PakNSave',
      items: ['Item 1', 'Item 2', 'Item 3'],
    },
    { name: 'Countdown', items: ['Item 4'] },
    { name: 'Bunnings', items: ['Item 5'] },
  ]

  return (
    <main>
      <Header />

      <div className="container">
        {shoppingPlan.map((shop, index) => (
          <ShoppingList items={shop.items} name={shop.name} key={index} />
        ))}
      </div>
    </main>
  )
}
