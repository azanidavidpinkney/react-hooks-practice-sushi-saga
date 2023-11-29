import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {sushis, eatSushi} ) {

  const indexIncrement = 4
  const [sushiIndex, setSushiIndex] = useState(0)

  let displayedSushis = sushis.slice(sushiIndex, (sushiIndex + indexIncrement));

  function handleMoreClick() {
    setSushiIndex((prevIndex) => {
      const newIndex = prevIndex + indexIncrement;
      return newIndex >= sushis.length ? 0 : newIndex;
    });
  }

  return (
    <div className="belt">
      {displayedSushis.map((sushi) => (
        <Sushi 
          key={sushi.id}
          sushi={sushi}
          handleClick={eatSushi}
        />
      ))}
      <MoreButton handleClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
