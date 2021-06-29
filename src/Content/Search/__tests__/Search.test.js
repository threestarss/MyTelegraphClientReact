import "@testing-library/jest-dom";
import { store } from "../../../Store/store";
import { render } from "../../../testUtils";
import Search from "../Search";

let getState, search

beforeAll(() => {
  [, getState] = render(<Search />, {
    store: store,
  });
  search = document.querySelector("")
})


describe("component rendering tests", () => {
  it("component should mount", () => {
    expect(search).toBeInTheDocument();
  })
  
})