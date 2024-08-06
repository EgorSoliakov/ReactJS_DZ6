import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      available,
    };
    dispatch(addProduct(newProduct));
    // Сброс формы
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя продукта"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
        requir
        ed
      />
      <label>
        Доступен:
        <input
          type="checkbox"
          checked={available}
          onChange={() => setAvailable(!available)}
        />
      </label>
      <button type="submit">Добавить продукт</button>
    </form>
  );
};

export default AddProduct;
