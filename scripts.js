/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL ="https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const INSECURE_URL = "https://media.themoviedb.org/t/p/w94_and_h141_face/sGMwPIE6m9QI3LzCRXnZG8opZtB.jpg";
const BOSCH_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/ge5gFKCO6m7MuGyjwjoGvqo2q2m.jpg";
const ENTOURAGE_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/kLKP8zrArBtBboGz3qJOuMGC7rL.jpg";
const THE_SHIELD_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/AfdZXqqlFsPUEfi6kWWWthxw7Nz.jpg";
const SNOWFALL_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/y7ntzl7msiaS6o7dvDbNG7XFYcR.jpg";
const NIP_TUCK_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/v5uEYpNbjGmJC59xqvmPW58aSTl.jpg";
const ARRESTED_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/p4r4RD7RsNcJVoz0H6z3dBoTBtW.jpg";
const DEXTER_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/q8dWfc4JwQuv3HayIZeO84jAXED.jpg";
const SUCCESSION_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg";
const TRUE_BLOOD_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/ktEp6fzL4xzCWsSVtrcH8JaQNQy.jpg";
const JUSTIFIED_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/ie1quhMk09lDtvtAyQAHTu09R9Z.jpg";
const THE_MINDY_PROJECT = "https://media.themoviedb.org/t/p/w300_and_h450_face/A3txgCPox6hJlOZ0TDTOxch7rVa.jpg"
const MELROSE_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/kIc03DwT3DPd48lKlbpyPxx3O1S.jpg";
const BEVERLY_HILLS = "https://media.themoviedb.org/t/p/w300_and_h450_face/b7BYfkhu653D894krwGO1ysIKTf.jpg";
const RIZZOLI = "https://media.themoviedb.org/t/p/w300_and_h450_face/kuCNyr4XVQ4MZWiNjVS6DypE988.jpg";
const QUEEN_SUGAR = "https://media.themoviedb.org/t/p/w300_and_h450_face/v5FtHPzooqBHsjEV7KAmQhFvd7w.jpg";
const SWAT_URL = "https://media.themoviedb.org/t/p/w300_and_h450_face/ttzrYMdsKWR8PTRLw7uo4noqaOJ.jpg";  

// This is an array of strings (TV show titles)
let shows = [
  {
    id: 1,
    title: "Fresh Prince of Bel-Air",
    genre: "Comedy",
    years: "1990-1996",
    network: "NBC",
    seasons: 6,
    rating: 8.1,
    description: "A street-smart teen from West Philly moves in with his wealthy aunt and uncle in Bel-Air.",
    image: FRESH_PRINCE_URL,
  },
  {
    id: 2,
    title: "Curb Your Enthusiasm",
    genre: "Comedy",
    years: "2000 - 2024",
    network: "HBO",
    seasons: 12,
    rating: 8.7,
    description: "Larry David navigates the absurdity of life in Los Angeles with zero social filter.",
    image: CURB_POSTER_URL,
  },
  {
    id: 3,
    title: "East Los High",
    genre: "Drama",
    years: "2013 - 2017",
    network: "Hulu",
    seasons: 4,
    rating: 7.2,
    description: "Latino teens in East LA deal with love, family, and big life decisions in this groundbreaking drama.",
    image: EAST_LOS_HIGH_POSTER_URL,
  },
  {
    id: 4,
    title: "Insecure",
    genre: "Comedy",
    years: "2016 - 2021",
    network: "HBO",
    seasons: 5,
    rating: 8.0,
    description: "Issa Rae navigates the awkward experiences of a Black woman living in South LA.",
    image: INSECURE_URL,
  },
  {
    id: 5,
    title: "Bosch",
    genre: "Crime",
    years: "2014 - 2021",
    network: "Amazon",
    seasons: 7,
    rating: 8.5,
    description: "LAPD detective Harry Bosch relentlessly pursues justice on the streets of Hollywood.",
    image: BOSCH_URL,
  },
  {
    id: 6,
    title: "Entourage",
    genre: "Comedy",
    years: "2004 - 2011",
    network: "HBO",
    seasons: 8,
    rating: 8.4,
    description: "A rising movie star navigates fame and Hollywood with his crew from Queens.",
    image: ENTOURAGE_URL,
  },
  {
    id: 7,
    title: "The Shield",
    genre: "Crime",
    years: "2002 - 2008",
    network: "FX",
    seasons: 7,
    rating: 8.7,
    description: "A corrupt but effective LA cop fights crime while hiding his own illegal operations.",
    image: THE_SHIELD_URL,
  },
  {
    id: 8,
    title: "Snowfall",
    genre: "Drama",
    years: "2017 - 2023",
    network: "FX",
    seasons: 6,
    rating: 8.3,
    description: "The crack cocaine epidemic hits South Central LA in the 1980s, told through multiple perspectives.",
    image: SNOWFALL_URL,
  },
  {
    id: 9,
    title: "Nip/Tuck",
    genre: "Drama",
    years: "2003 - 2010",
    network: "FX",
    seasons: 6,
    rating: 8.1,
    description: "Two plastic surgeons run a high-end practice in Miami before moving their drama to Hollywood.",
    image: NIP_TUCK_URL,
  },
  {
    id: 10,
    title: "Arrested Development",
    genre: "Comedy",
    years: "2003 - 2019",
    network: "Fox/Netflix",
    seasons: 5,
    rating: 8.7,
    description: "A wealthy, dysfunctional Californian family loses its fortune and struggles to stay together.",
    image: ARRESTED_URL,
  },
  {
    id: 11,
    title: "Dexter",
    genre: "Crime",
    years: "2006 - 2013",
    network: "Showtime",
    seasons: 8,
    rating: 8.6,
    description: "A Miami blood-spatter analyst moonlights as a vigilante serial killer targeting other killers.",
    image: DEXTER_URL,
  },
  {
    id: 12,
    title: "Succession",
    genre: "Drama",
    years: "2018 - 2023",
    network: "HBO",
    seasons: 4,
    rating: 8.9,
    description: "The Roy family battles for control of a global media empire in this razor-sharp satire.",
    image: SUCCESSION_URL,
  },
  {
    id: 13,
    title: "True Blood",
    genre: "Drama",
    years: "2008 - 2014",
    network: "HBO",
    seasons: 7,
    rating: 7.9,
    description: "Vampires live openly among humans in a small Louisiana town with plenty of dark secrets.",
    image: TRUE_BLOOD_URL,
  },
  {
    id: 14,
    title: "Justified",
    genre: "Crime",
    years: "2010 - 2015",
    network: "FX",
    seasons: 6,
    rating: 8.6,
    description: "A sharp-tongued US Marshal enforces his own brand of justice in rural Kentucky.",
    image: JUSTIFIED_URL,
  },
  {
    id: 15,
    title: "The Mindy Project",
    genre: "Comedy",
    years: "2012 - 2017",
    network: "Fox/Hulu",
    seasons: 6,
    rating: 7.6,
    description: "An OB/GYN navigates her chaotic romantic and professional life in New York City.",
    image: THE_MINDY_PROJECT,
  },
  {
    id: 16,
    title: "Melrose Place",
    genre: "Drama",
    years: "1992 - 1999",
    network: "Fox",
    seasons: 7,
    rating: 6.8,
    description: "Young adults living in a West Hollywood apartment complex get caught up in love and scandal.",
    image: MELROSE_URL,
  },
  {
    id: 17,
    title: "Beverly Hills 90210",
    genre: "Drama",
    years: "1990 - 2000",
    network: "Fox",
    seasons: 10,
    rating: 6.9,
    description: "Twin siblings from Minnesota adjust to life among the wealthy teens of Beverly Hills.",
    image: BEVERLY_HILLS,
  },
  {
    id: 18,
    title: "Rizzoli & Isles",
    genre: "Crime",
    years: "2010 - 2016",
    network: "TNT",
    seasons: 7,
    rating: 7.6,
    description: "A tough Boston detective and a refined medical examiner solve crimes and build an unlikely friendship.",
    image: RIZZOLI,
  },
  {
    id: 19,
    title: "Queen Sugar",
    genre: "Drama",
    years: "2016 - 2022",
    network: "OWN",
    seasons: 7,
    rating: 7.8,
    description: "Three siblings reunite in Louisiana to save their family's sugarcane farm after their father's death.",
    image: QUEEN_SUGAR,
  },
  {
    id: 20,
    title: "S.W.A.T.",
    genre: "Crime",
    years: "2017 - present",
    network: "CBS",
    seasons: 7,
    rating: 7.5,
    description: "A locally born LAPD sergeant leads an elite tactical unit through high-stakes operations in LA.",
    image: SWAT_URL,
  },
];


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

function displayShows(showList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");


  document.getElementById("show-count-text").innerHTML = 
    "Showing <span>" + showList.length + "</span> shows";

  for (let i = 0; i < showList.length; i++) {
    const show = showList[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, show);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, show) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = show.title;

  const cardImage = card.querySelector("img");
  cardImage.src = show.image;
  cardImage.alt = show.title + " Poster";

  const bulletPoints = card.querySelectorAll("li");
  bulletPoints[0].textContent = "Genre: " + show.genre;
  bulletPoints[1].textContent = "Network: " + show.network;
  bulletPoints[2].textContent = "Rating: " + show.rating + "/10";
  bulletPoints[3].textContent = "Seasons: " + show.seasons;

  const cardContent = card.querySelector(".card-content");


  const oldYears = card.querySelector(".card-years");
  const oldDesc = card.querySelector(".card-description");
  if (oldYears) oldYears.remove();
  if (oldDesc) oldDesc.remove();
  const years = document.createElement("p");
  years.className = "card-years";
  years.textContent = show.years;
  cardContent.appendChild(years);

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = show.description;
  cardContent.appendChild(description);


  const oldActions = card.querySelector(".card-actions");
  if (oldActions) oldActions.remove();

 
  const cardActions = document.createElement("div");
  cardActions.className = "card-actions";
  const isFavorited = favorites.find(function(s) { return s.id === show.id; });
  const heartBtn = document.createElement("button");
  heartBtn.className = isFavorited ? "heart-btn favorited" : "heart-btn";
  heartBtn.innerHTML = isFavorited ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
  heartBtn.onclick = function() {
    toggleFavorite(show.id);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.onclick = function() {
    removeShow(show.id);
  };
  cardActions.appendChild(heartBtn);
  cardActions.appendChild(deleteBtn);
  cardContent.appendChild(cardActions);

  // --- Watchlist UI ---
  const watchlistDiv = document.createElement("div");
  watchlistDiv.className = "watchlist-section";
  if (isInWatchlist(show.id)) {
    // Progress input
    const progressLabel = document.createElement("label");
    progressLabel.textContent = "Progress: ";
    const progressInput = document.createElement("input");
    progressInput.type = "number";
    progressInput.min = 0;
    progressInput.max = show.seasons;
    progressInput.value = getProgress(show.id);
    progressInput.style.width = "50px";
    progressInput.onchange = function() {
      updateProgress(show.id, parseInt(progressInput.value, 10));
    };
    watchlistDiv.appendChild(progressLabel);
    watchlistDiv.appendChild(progressInput);
    // Remove from watchlist button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove from Watchlist";
    removeBtn.onclick = function() {
      removeFromWatchlist(show.id);
      displayShows(shows);
    };
    watchlistDiv.appendChild(removeBtn);
  } else {
    // Add to watchlist button
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to Watchlist";
    addBtn.onclick = function() {
      addToWatchlist(show.id);
      displayShows(shows);
    };
    watchlistDiv.appendChild(addBtn);
  }
  cardContent.appendChild(watchlistDiv);

  console.log("new card:", show.title);
}


document.addEventListener("DOMContentLoaded", function() {
  displayShows(shows);
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
  shows.pop();
  displayShows(shows);
}


function searchShows() {
  const query = document.getElementById("search-input").value.toLowerCase();

  const filtered = shows.filter(function(show) {
    return show.title.toLowerCase().includes(query);
  });

  displayShows(filtered);
}

function filterByGenre(genre) {
  const buttons = document.querySelectorAll(".genre-filters button");
  buttons.forEach(function(btn) {
    btn.classList.remove("active");
    if (btn.textContent === genre) {
      btn.classList.add("active");
    }
  });

  if (genre === "All") {
    displayShows(shows);
    return;
  }

  const filtered = shows.filter(function(show) {
    return show.genre === genre;
  });

  displayShows(filtered);
}

function sortShows() {
  const sortValue = document.getElementById("sort-select").value;
  let sorted = [...shows]; 

  if (sortValue === "rating-high") {
    sorted.sort(function(a, b) { return b.rating - a.rating; });
  } else if (sortValue === "rating-low") {
    sorted.sort(function(a, b) { return a.rating - b.rating; });
  } else if (sortValue === "title-az") {
    sorted.sort(function(a, b) { return a.title.localeCompare(b.title); });
  } else if (sortValue === "title-za") {
    sorted.sort(function(a, b) { return b.title.localeCompare(a.title); });
  } else {
    displayShows(shows);
    return;
  }

  displayShows(sorted);
}

function addShow() {
  const title = document.getElementById("new-title").value;
  const genre = document.getElementById("new-genre").value;
  const network = document.getElementById("new-network").value;
  const rating = parseFloat(document.getElementById("new-rating").value);
  const image = document.getElementById("new-image").value;

  if (!title) {
    alert("Please enter a title!");
    return;
  }

  const newShow = {
    id: shows.length + 1,
    title: title,
    genre: genre,
    network: network,
    rating: rating,
    image: image,
    years: "Present",
    seasons: 1,
    description: "User added show.",
  };
  
  shows.push(newShow);
  saveShows();          
  displayShows(shows);

  document.getElementById("new-title").value = "";
  document.getElementById("new-genre").value = "";
  document.getElementById("new-network").value = "";
  document.getElementById("new-rating").value = "";
  document.getElementById("new-image").value = "";
}


function saveShows() {
  localStorage.setItem("shows", JSON.stringify(shows));
}

function loadShows() {
  const saved = localStorage.getItem("shows");
  if (saved) {
    const savedShows = JSON.parse(saved);
    savedShows.forEach(function(savedShow) {
      const exists = shows.find(function(s) { return s.id === savedShow.id; });
      if (!exists) {
        shows.push(savedShow);
      }
    });
  }
}


document.addEventListener("DOMContentLoaded", function() {
  loadWatchlist();
  displayShows(shows);
});

let favorites = [];
let watchlist = [];
let currentTab = "all";

// --- Watchlist Local Storage ---
function saveWatchlist() {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function loadWatchlist() {
  const saved = localStorage.getItem("watchlist");
  if (saved) {
    watchlist = JSON.parse(saved);
  }
}

function addToWatchlist(showId) {
  if (!watchlist.find(w => w.showId === showId)) {
    watchlist.push({ showId, progress: 0 });
    saveWatchlist();
  }
}

function removeFromWatchlist(showId) {
  watchlist = watchlist.filter(w => w.showId !== showId);
  saveWatchlist();
}

function updateProgress(showId, progress) {
  const entry = watchlist.find(w => w.showId === showId);
  if (entry) {
    entry.progress = progress;
    saveWatchlist();
  }
}

function getProgress(showId) {
  const entry = watchlist.find(w => w.showId === showId);
  return entry ? entry.progress : 0;
}

function isInWatchlist(showId) {
  return !!watchlist.find(w => w.showId === showId);
}

function switchTab(tab) {
  currentTab = tab;

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function(btn) {
    btn.classList.remove("active");
  });

  if (tab === "all") {
    tabs[0].classList.add("active");
    displayShows(shows);
  } else if (tab === "favorites") {
    tabs[1].classList.add("active");
    displayFavorites();
  } else if (tab === "watchlist") {
    tabs[2].classList.add("active");
    displayWatchlist();
  }
}

function displayWatchlist() {
  const watchlistShowIds = watchlist.map(w => w.showId);
  const watchlistShows = shows.filter(show => watchlistShowIds.includes(show.id));
  if (watchlistShows.length === 0) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `
      <div class="empty-favorites">
        <p> No shows in your watchlist yet!</p>
      </div>
    `;
    document.getElementById("show-count-text").innerHTML = "Showing <span>0</span> shows";
    return;
  }
  displayShows(watchlistShows);
}

function displayFavorites() {
  if (favorites.length === 0) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `
      <div class="empty-favorites">
        <p> No favorites yet!</p>
        
      </div>
    `;
    return;
  }
  displayShows(favorites);
}

function toggleFavorite(showId) {
  const show = shows.find(function(s) { return s.id === showId; });
  const alreadyFavorited = favorites.find(function(s) { return s.id === showId; });

  if (alreadyFavorited) {
    favorites = favorites.filter(function(s) { return s.id !== showId; });
  } else {
    favorites.push(show);
  }
  if (currentTab === "all") {
    displayShows(shows);
  } else {
    displayFavorites();
  }
}

function removeShow(showId) {
  const show = shows.find(function(s) { return s.id === showId; });
  
  const confirmed = confirm("Are you sure you want to remove " + "'"+ show.title.toUpperCase() +"'"+ "?");
  
  if (confirmed) {
    shows = shows.filter(function(s) { return s.id !== showId; });
    saveShows();
    displayShows(shows);
  }
}