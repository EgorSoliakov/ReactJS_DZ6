import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store";

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        data: { name, description, price: parseFloat(price), available },
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Доступен:
        <input
          type="checkbox"
          checked={available}
          onChange={() => setAvailable(!available)}
        />
      </label>
      <button type="submit">Сохранить изменения</button>
    </form>
  );
};

export default EditProduct;
