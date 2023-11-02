import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);
  // const totalprice=0;
  let totalprice = 0; 
  list.forEach(({ amount }) => {
    totalprice += amount;
  });

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total : {totalprice}
        </h2>
      </div>
    </>
  );
}
