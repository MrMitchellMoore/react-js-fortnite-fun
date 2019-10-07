import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-files.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <table className="tble">
      <thead>
        <tr>
          <th>Item discovery</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {items.map(item => (
              <h1 key={item.itemid}>
                <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
              </h1>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Shop;
