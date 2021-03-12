function Welcome() {
  return (
    <div className="welcome-msg">
      <h2>Welcome to threestarss' Telegra.ph Client!</h2>
      <p>
        Use the <b>left</b> input to search for articles on Telegra.ph (via
        Google Custom Search API), and the <b>right</b> input to fetch articles
        with direct link (e.g. https://telegra.ph/Sample-Page-12-15) straight
        from Telegra.ph (via Telegra.ph API)
      </p>
      <p>
        Be careful when using Search! Telegra.ph is full of articles that
        contain malicious links! And unfortunately, I can't filter them out of
        SERP yet...
      </p>
    </div>
  );
}

export default Welcome;
