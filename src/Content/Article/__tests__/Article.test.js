import "@testing-library/jest-dom";
import { render } from "../../../testUtils";
import Article from "../Article";
import { mockArticle, bookmark } from "../mockArticle";

let bookmarks, article, header, bookmarkBtn;

beforeAll(() => {
  let [, useSelector] = render(<Article />, {
    initialState: { article: mockArticle },
  });
  article = document.querySelector("article");
  header = document.querySelector("header");
  bookmarkBtn = document.querySelector(".bookmark-btn");
  bookmarkBtn.click();
  bookmarks = useSelector((state) => state.bookmarks);
});

describe("component rendering tests", () => {
  it("component should mount", () => {
    expect(article).toBeInTheDocument();
  });
  it("header should mount", () => {
    expect(header).toBeInTheDocument();
  });
  it("header should contain h1, address and bookmark button", () => {
    let headerElements = Array.from(header.children);
    expect(headerElements.some((elem) => elem.nodeName === "H1")).toBeTruthy();
    expect(
      headerElements.some((elem) => elem.nodeName === "ADDRESS")
    ).toBeTruthy();
    expect(
      headerElements.some((elem) => elem.nodeName === "BUTTON")
    ).toBeTruthy();
  });
  it("amount of article nodes + 1 and content length should be equal", () => {
    expect(article.children.length).toEqual(mockArticle.content.length + 1);
  });
});

describe("header functionality tests", () => {
  it("bookmark button should change color after getting clicked", () => {
    expect(bookmarkBtn).toHaveClass("clicked");
  });
  it("bookmark button should save article to bookmarks", () => {
    expect(bookmarks).toContainEqual(bookmark);
  });
  it("another click on bookmark button should remove bookmark from bookmarks", () => {
    bookmarkBtn.click();
    expect(bookmarks).not.toContainEqual(bookmark);
  });
});
