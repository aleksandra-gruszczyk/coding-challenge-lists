import React from 'react'
import { useState } from 'react'

export default function ShoppingList({ items, name }) {
  const [newItem, setNewItem] = useState('')
  const [toggle, setToggle] = useState(false)
  const [listItems, setListItems] = useState(items)

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

  function addNewItem(item) {
    listItems.push(item)
    setListItems(listItems)
    setToggle(!toggle)
  }

  function removeItem(item) {
    listItems.splice(items.indexOf(item), 1)
    setListItems(listItems)
    setToggle(!toggle)
  }

  function handleDragEnd(e) {
    let draggedItem = e.dataTransfer.getData('listItem')
    removeItem(draggedItem)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim().length > 0) {
      setNewItem('')
      addNewItem(newItem)
    }
  }

  function handleDragStart(e) {
    e.dataTransfer.setData('listItem', e.target.innerHTML)
  }

  function handleDragDrop(e) {
    e.preventDefault()
    let draggedItem = e.dataTransfer.getData('listItem')
    addNewItem(draggedItem, name)
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
