import telegraphAPI from "../../TelegraphAPI/telegraphAPI";

const nodeString =
  "a, aside, b, blockquote, br, code, em, figcaption, figure, h3, h4, hr, i, iframe, img, li, ol, p, pre, s, strong, u, ul, video";

export const TestArticle = () => {
  return (
    <>
      <button onClick={handleClick}>TESTING</button>
      <article className="">
        <p>
          <a href="leessgooo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eius.
          </a>
        </p>
        <p>
          <b>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            autem.
          </b>
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          eligendi?
        </blockquote>
        <br />
        <code>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, et?
        </code>
        <em>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id.
        </em>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          amet.
        </h3>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          iste.
        </h4>
        <hr />
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, error!
        </i>
        <ul>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            esse?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            esse?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            esse?
          </li>
        </ul>
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            impedit placeat deleniti sequi minus voluptates, dicta ad tempore
            explicabo fugit eum! Molestiae labore cum ullam modi, laboriosam at
            eveniet suscipit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            impedit placeat deleniti sequi minus voluptates, dicta ad tempore
            explicabo fugit eum! Molestiae labore cum ullam modi, laboriosam at
            eveniet suscipit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            impedit placeat deleniti sequi minus voluptates, dicta ad tempore
            explicabo fugit eum! Molestiae labore cum ullam modi, laboriosam at
            eveniet suscipit.
          </li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          aspernatur.
        </p>
        <pre>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          vel?
        </pre>
        <s>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          atque?
        </s>
        <strong>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
          inventore.
        </strong>
        <u>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?
        </u>
      </article>
    </>
  );

  async function handleClick() {
    let article = document.querySelector("article");
    if (!article) return;
    let content = domToNodeArray(Array.from(article.childNodes));
    telegraphAPI.createPage(
      "Test article",
      "333",
      "https://github.com/threestarss",
      JSON.stringify(content)
    );
  }

  function domToNodeArray(arrOfDomElems: any) {
    return arrOfDomElems.map((elem: any) => {
      if (elem.nodeType === elem.TEXT_NODE) return elem.data;
      let node: any = {};
      node.tag = elem.tagName.toLowerCase();
      if (elem.attributes.length > 0) {
        node.attrs = {};
        for (let i = 0; i < elem.attributes.length; i++) {
          let attribute = elem.attributes[i];
          node.attrs[attribute.name] = attribute.value;
        }
      }
      if (elem.childNodes.length > 0) {
        node.children = domToNodeArray(Array.from(elem.childNodes));
      }
      return node;
    });
  }
};
