import { useState } from "react"

function App() {
  const availableItems = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5,
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8,
    },
    {
      id: 3,
      name: "Thoub",
      price: 12,
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20,
    },
    {
      id: 5,
      name: "Couch",
      price: 50,
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70,
    },
  ]

  const [item, setItem] = useState(availableItems)
  const [shoppingCart, setCart] = useState([])
  const [availableBalance, setBalance] = useState(100)
  const [wmessage, setMessage] = useState("")

  function handleAddToCart(selectedItem) {
    const remainingItems = item.filter((oneItem) => oneItem.name !== selectedItem.name)

    if (availableBalance >= selectedItem.price) {
      setItem(remainingItems)
      setCart([...shoppingCart, selectedItem])
      setBalance(availableBalance - selectedItem.price)
    } else {
      setMessage("Warning: You are out of budget")
    }
  }

function handleRemoveFromShoppingCart(selectedItem) {
  const updatedCart = shoppingCart.filter((oneItem) => oneItem.name !== selectedItem.name)

  setCart(updatedCart)
  setItem((prevItems) => [...prevItems, selectedItem])
  setBalance((prevBalance) => prevBalance + selectedItem.price)
}

  return (
    <>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      {item.map((oneItem) => (
        <div key={oneItem.id}>
          Item: {oneItem.name} <br />
          <button onClick={() => handleAddToCart(oneItem)}>Add To Cart</button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {shoppingCart.map((oneItem) => (
        <div key={oneItem.name}>
          Item: {oneItem.name} <br/>
          <button onClick={() => handleRemoveFromShoppingCart(oneItem)}>Remove From Cart</button>
        </div>
      ))}

      {wmessage && <p>{wmessage}</p>}
    </>
  )
}

export default App
