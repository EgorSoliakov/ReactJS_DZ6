import { configureStore, createSlice } from "@reduxjs/toolkit";

// Начальное состояние
const initialState = {
  products: [],
};

// Создание слайса
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...action.payload.data,
        };
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

// Экспортируем действия
export const { addProduct, removeProduct, updateProduct, toggleAvailability } =
  productSlice.actions;

// Создание хранилища
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
