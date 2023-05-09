import React from 'react'
import { useState } from 'react'

export default function ShoppingList({ items, name, addNew, remove }) {
  const [newItem, setNewItem] = useState('')
  const [toggle, setToggle] = useState(false)

  let itemsDisplay = items.map((item, index) => (
    <li
      draggable
      key={index}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {item}
    </li>
  ))

  function handleDragEnd(e) {
    let draggedItem = e.dataTransfer.getData('listItem')
    remove(draggedItem, name)
    setToggle(!toggle)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim().length > 0) {
      setNewItem('')
      addNew(newItem, name)
    }
  }
  function handleDragStart(e) {
    e.dataTransfer.setData('listItem', e.target.innerHTML)
  }

  function handleDragDrop(e) {
    e.preventDefault()
    let draggedItem = e.dataTransfer.getData('listItem')

    addNew(draggedItem, name)

    setToggle(!toggle)
  }
  function allowDrop(e) {
    e.preventDefault()
  }

  return (
    <>
      <div onDragOver={allowDrop}>
        {name}
        <div className="shoppingList">
          <ul onDrop={handleDragDrop} className="listStyle">
            {itemsDisplay}
          </ul>

          <form onSubmit={handleSubmit}>
            <div className="addNew">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              ></input>
              <button type="submit">GO</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
