import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ props, onItemFormSubmit}) {
  const [itemFormData, setItemFormData] = useState(
   { id: "",
    name: "" ,
    category: "Produce"
  })
function handleChange(event) {
  const name = event.target.name
  let value = event.target.value
  setItemFormData({
    ...itemFormData,
    [name]: value
})
}


console.log(itemFormData)
  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, {...itemFormData, id: uuid()})}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
