import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import { rootReducer } from "../../../Store/store";

interface Props {
  children: React.ReactNode;
}

//TODO: type it properly

function render(
  ui: any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
  }
  function useSelector(callback: any) {
    return callback(store.getState());
  }
  return [rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), useSelector];
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
