/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const AllProductColors = ({ setColorId }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-colors`)
      .then((res) => res.json())
      .then((colors) => setColors(colors));
  }, []);

  // console.log(colorId);

  return (
    <div className="color-panel">
      {colors.map((color) => (
        <div
          title="Quelle couleur?"
          className="color-point"
          key={color.id}
          id={color.id}
          style={{ backgroundColor: color.hexCode }}
          onClick={(e) => setColorId(e.target.id)}
        ></div>
      ))}
      <Button onClick={() => location.reload()}>Refresh</Button>
    </div>
  );
};

export default AllProductColors;
