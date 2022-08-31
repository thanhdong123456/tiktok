import { useState } from 'react'

const gifts = [
  'cpu i9',
  'ram 32gb',
  'keyboard'
]
function App() {

  const [gift, setGift] = useState('chưa có phần thưởng')
  const handleUpdate = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <div className="App">
      <h1>{gift}</h1>
      <button onClick={handleUpdate}>lấy thưởng</button>
    </div>
  );
}

export default App;
