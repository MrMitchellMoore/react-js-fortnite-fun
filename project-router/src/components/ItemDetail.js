import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-public-files.theapinetwork.com/item/get?ids=${match.params.id}`
    );
    const item = await data.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div className="items">
      <h1>{item.name}</h1>
      <br />
      <img src={item.images.transparent} alt="" />
    </div>
  );
}

export default Item;
