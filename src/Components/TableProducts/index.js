import React, { useContext, useState, useRef, useEffect } from "react";
import AppContext from "../../AppContext";
import Dot from "../Dot";

function TableProducts() {
  const [color, setColor] = useState("");
  const refColor = useRef()  
  const context = useContext(AppContext);



  const handleChange = (event) => {
    let color = event.target.value;
    setColor(color)
  }

  useEffect(() => {
      setTimeout(() => {
          if(color === refColor.current.value){
            context.loadProductosByColor(color)
          }
      }, 800);
  }, [color])

  return (
    <>
      <div>
        <div className="form-row">
          <div className="col">
            <input ref={refColor} type="text" className="form-control  mb-2" placeholder="Type a color" onChange={handleChange} />
          </div>
        </div>
      </div>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Size</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          {context.products.map((product) => {
            return (
              <tr key={product.productID} className="table-active">
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td>{product.productNumber}</td>
                <td title={product.color}>
                  <Dot color={product.color}></Dot>
                </td>
                <td>{product.listPrice}</td>
                <td>{product.size}</td>
                <td>{product.weight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableProducts;
