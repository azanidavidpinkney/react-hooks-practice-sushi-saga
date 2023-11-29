import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// App
// |- Sushi Container
//    |- Sushi
//    |- More Button
// |- Table

const sushiAPI = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(sushiAPI)
    .then(response => response.json())
    .then(setSushis)
  }, [])
  
  function eatSushi(sushi) {
    if (!sushi.eaten && money >= sushi.price) {
      setSushis(sushis.map(roll => roll.id !== sushi.id ? roll : {...roll, eaten: true}))
      setMoney((money) => money - sushi.price)
    }
  }

  const budget = 100;
  const [money, setMoney] = useState(budget)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      <Table plates={sushis.filter(sushi => sushi.eaten)} money={money}/>
    </div>
  );
}

export default App;
