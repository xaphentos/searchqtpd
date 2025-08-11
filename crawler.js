const customLinks = {
  "facebook": [
    "https://facebook.com",
    "https://www.facebook.com/marketplace/?ref=app_tab",
    "https://www.messenger.com/"
  ],
  "marketplace": [
    "https://www.facebook.com/marketplace/?ref=app_tab"
  ],
  "whatsapp": [
    "https://www.whatsapp.com/",
    "https://web.whatsapp.com/"
  ],
  "google": [
    "https://www.google.com/",
    "https://www.google.com/maps",
    "https://translate.google.com/?hl=en",
    "http://gmail.com/"
  ],
  "vscode": [
    "https://code.visualstudio.com/"
  ],
  "Tokyo": [
    "https://en.wikipedia.org/wiki/Tokyo"
  ],
  "netlify": [
    "https://www.netlify.com/",
    "https://app.netlify.com/drop"
  ],
  "youtube": [
    "https://www.youtube.com/",
    "https://www.youtube.com/feed/subscriptions",
    "https://youtube.com/shorts",
    "https://www.youtube.com/results?search_query="
  ],
  "tiktok": [
    "https://www.tiktok.com/",
    "https://www.tiktok.com/login",
    "https://www.tiktok.com/live",
    "https://www.tiktok.com/foryou?lang=en"
  ],
  "signal": [
    "https://signal.org/",
    "https://signal.org/#signal",
    "https://signal.org/download/",
    "https://signal.org/blog/",
    "https://support.signal.org/hc/en-us"
  ],
  "telegram": [
    "https://web.telegram.org/a/",
    "https://telegram.org/"
  ],
  "chatgpt": [
    "https://chatgpt.com/",
    "https://openai.com/"
  ],
  "deepseek": [
    "https://chat.deepseek.com"
  ],
  "wordpress": [
    "https://wordpress.com/"
  ],
  "aliexpress": [
    "https://www.aliexpress.com/"
  ],
  "proton": [
    "https://proton.me/",
    "https://proton.me/mail"
  ],
  "tutanota": [
    "https://mail.tutanota.com/login",
    "https://app.tuta.com/login"
  ],
  "ebay": [
    "https://www.ebay.de/",
    "https://www.ebay.com/"
  ],
  "github": [
    "https://github.com/"
  ],
  "twitter": [
    "https://x.com/"
  ],
  "reddit": [
    "https://www.reddit.com/"
  ],
  "yahoo": [
    "https://yahoo.com"
  ],
  "linkedin": [
    "https://www.linkedin.com/"
  ],
  "pinterest": [
    "https://www.pinterest.com/"
  ],
  "canva": [
    "https://www.canva.com/"
  ],
  "weather": [
    "https://weather.com/"
  ],
  "paypal": [
    "https://paypal.com"
  ],
  "discord": [
    "https://discord.com"
  ],
  "spotify": [
    "https://spotify.com",
    "https://open.spotify.com/"
  ],
  "apple": [
    "https://apple.com"
  ],
  "walmart": [
    "https://walmart.com"
  ],
  "steam": [
    "https://store.steampowered.com/",
    "https://steamcommunity.com/",
    "https://steamcommunity.com/chat/",
    "https://help.steampowered.com/en/",
    "https://help.steampowered.com/es/",
    "https://store.steampowered.com/about/"
  ],
  "microsoft": [
    "https://www.microsoft.com/",
    "https://apps.microsoft.com/home?hl=en-US&gl=US",
    "https://myaccount.microsoft.com/",
    "https://www.microsoft.com/en-us/microsoft-365",
    "https://www.microsoft.com/en-us/software-download/windows11",
    "https://www.microsoft.com/software-download/windows10"
  ],
  "wikipedia": [
    "https://en.wikipedia.org/wiki/Main_Page",
    "https://es.wikipedia.org/wiki/Wikipedia:Portada"
  ],
  "office": [
    "https://www.office.com/"
  ],
  "soundcloud": [
    "https://soundcloud.com/soundcloud",
    "https://soundcloud.com/upload",
    "https://soundcloud.com/discover",
    "https://soundcloud.com/company/home"
  ],
  "revolut": [
    "https://www.revolut.com/"
  ],
  "openai": [
    "https://openai.com"
  ],
  "binance": [
    "https://www.binance.com/"
  ],
  "twitch": [
    "https://twitch.tv"
  ],
  "medium": [
    "https://medium.com"
  ],
  "zoom": [
    "https://www.zoom.com/",
    "https://www.zoom.com/en/products/",
  ],
  "booking": [
    "https://www.booking.com/"
  ],
  "netflix": [
    "https://www.netflix.com/"
  ],
  "instagram": [
    "https://www.instagram.com/"
  ],
  "duckduckgo": [
    "https://duckduckgo.com/",
    "https://duckduckgo.com/?t=h_&q=&ia=web"
  ],
  "git": [
    "https://git-scm.com/"
  ],
  "gitlab": [
    "https://about.gitlab.com/"
  ],
  "meta": [
    "https://www.meta.com/"
  ],
  "bing": [
    "https://www.bing.com/"
  ],
  "imdb": [
    "https://www.imdb.com/"
  ]
};

function getCustomResults(query) {
  const cleaned = query.toLowerCase();
  const matchedLinks = [];

  for (const keyword in customLinks) {
    if (cleaned.includes(keyword)) {
      matchedLinks.push(...customLinks[keyword]);
    }
  }

  return matchedLinks.length > 0 ? matchedLinks : null;
}

function getSpecialSearchLink(query) {
  const cleaned = query.toLowerCase().trim();

  if (cleaned.startsWith("youtube ")) {
    const term = query.slice(8).trim();
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`;
  }
  if (cleaned.startsWith("yt ")) {
    const term = query.slice(3).trim();
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`;
  }

  if (cleaned.startsWith("tiktok ")) {
    const term = query.slice(7).trim();
    return `https://www.tiktok.com/search?q=${encodeURIComponent(term)}`;
  }

  if (cleaned.startsWith("maps ") || cleaned.startsWith("map ")) {
    const term = query.split(" ").slice(1).join(" ");
    return `https://www.google.com/maps/search/${encodeURIComponent(term)}`;
  }

  return null;
}

function addExtraSearchLinks(query, container) {
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  const youtubeArticle = document.createElement("article");
  youtubeArticle.innerHTML = `
    <a href="${youtubeSearchUrl}" target="_blank" rel="noopener noreferrer">
      Search YouTube for "${query}"
    </a>
    <p>Find videos related to your search</p>
    <small>youtube.com</small>
  `;
  container.appendChild(youtubeArticle);

  const wikiSearchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
  const wikiArticle = document.createElement("article");
  wikiArticle.innerHTML = `
    <a href="${wikiSearchUrl}" target="_blank" rel="noopener noreferrer">
      Search Wikipedia for "${query}"
    </a>
    <p>Find encyclopedia articles related to your search</p>
    <small>wikipedia.org</small>
  `;
  container.appendChild(wikiArticle);
}

async function fetchResults(query) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  const customResults = getCustomResults(query);
  if (customResults) {
    customResults.forEach(link => {
      const article = document.createElement("article");
      article.innerHTML = `
        <a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>
        <p>SearchQTPD result</p>
        <small>${new URL(link).hostname}</small>
      `;
      container.appendChild(article);
    });
    addExtraSearchLinks(query, container);
    return;
  }

  const specialSearchUrl = getSpecialSearchLink(query);
  if (specialSearchUrl) {
    const article = document.createElement("article");
    article.innerHTML = `
      <a href="${specialSearchUrl}" target="_blank" rel="noopener noreferrer">${specialSearchUrl}</a>
      <p>Special search result</p>
      <small>${new URL(specialSearchUrl).hostname}</small>
    `;
    container.appendChild(article);
    addExtraSearchLinks(query, container);
    return;
  }

  try {
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`);
    const data = await response.json();

    if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      renderTopics(data.RelatedTopics, container);
      addExtraSearchLinks(query, container);
    } else {
      const ddgSearchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
      const article = document.createElement("article");
      article.innerHTML = `
        <a href="${ddgSearchUrl}" target="_blank" rel="noopener noreferrer">${ddgSearchUrl}</a>
        <p>No API results, fallback to DuckDuckGo search</p>
        <small>duckduckgo.com</small>
      `;
      container.appendChild(article);
      addExtraSearchLinks(query, container);
    }
  } catch (error) {
    container.innerHTML = "<p>Error fetching search results.</p>";
    console.error(error);
  }
}

function renderTopics(topics, container) {
  topics.forEach(topic => {
    if (topic.Text && topic.FirstURL) {
      const article = document.createElement("article");
      article.innerHTML = `
        <a href="${topic.FirstURL}" target="_blank" rel="noopener noreferrer">${topic.Text}</a>
        <p>DuckDuckGo result</p>
        <small>${new URL(topic.FirstURL).hostname}</small>
      `;
      container.appendChild(article);
    } else if (topic.Topics) {
      renderTopics(topic.Topics, container);
    }
  });
}

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const query = document.getElementById("queryInput").value.trim();
  if (query) {
    window.location.href = `results.html?q=${encodeURIComponent(query)}`;
  }
});

const params = new URLSearchParams(window.location.search);
const q = params.get("q");
if (q) {
  document.getElementById("queryInput").value = q;
  fetchResults(q);
}
