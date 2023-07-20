/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

import { useState } from "react";

const Refac = () => {
  const [member, setMember] = useState<string>("-");
  const [code, setCode] = useState<string>("-");
  const [order, setOrder] = useState<number>(0);
  const [data, setData] = useState <Array <any>>([
    {name: "Guillaume", code: "ABCD", order: 1},
    {name: "Josian", code: "1234", order: 2},
    {name: "Jules", code: "EFGH", order: 3},
    {name: "Marvin", code: "IJKL", order: 4},
    {name: "Valery", code: "5678", order: 5},
    {name: "Fadi", code: "UVWX", order: 6},
    {name: "Dan", code: "QRST", order: 7},
    {name: "Nicolas", code: "91011", order: 8},
    {name: "Emilie", code: "MNOP", order: 9}
  ])
  
  const handleRows = () => {
    return data.map((item, index) => {
      return (
        <div key={index} onClick={() => handleClick(item)} style={{display: "flex", justifyContent: "space-between", width: "100%", cursor: "pointer"}}>
          <p style={{width: 200}}>{item.name}</p>
          <p style={{width: 200}}>{item.code}</p>
          <p style={{width: 200}}>{item.order}</p>
        </div>
      )
    })
  }

  const handleClick = (item: any) => {
    setMember(item.name);
    setCode(item.code);
    setOrder(item.order);
  }

  return (
    <div>
      <h1>My Refac</h1>
      <p  style={{width: 600}}>
        You clicked on: <span style={{fontWeight: "bold"}}>{member}</span> code: <span style={{fontWeight: "bold"}}>{code}</span> order: <span style={{fontWeight: "bold"}}>{order ? order : "-"}</span>
      </p>

      <div style={{width: 600}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p style={{width: 200, fontWeight: "bold"}}>Member</p>
          <p style={{width: 200, fontWeight: "bold"}}>Code</p>
          <p style={{width: 200, fontWeight: "bold"}}>Order</p>
        </div>
        {handleRows()}
      </div>
    </div>
  );
};

export default Refac;
