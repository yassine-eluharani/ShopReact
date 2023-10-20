import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {
  const mockStore = configureStore();
  const initialState = {
    cart: {
      cartItems: [],
    },
  };
  const initialStateWithOneItem = {
    cart: {
      cartItems: [
        {
          id: 1,
          name: "Sample Item",
          price: 9.99,
        },
      ],
    },
  };

  it("displays Home and My Cart links with cart item count", () => {
    const store = mockStore(initialState);
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("My cart (0)")).toBeInTheDocument(); // You may need to adjust the count based on your initial state
  });

  it("displays Home and My Cart links with cart item count (1 item)", () => {
    const store = mockStore(initialStateWithOneItem);
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("My cart (1)")).toBeInTheDocument();
  });
});
