//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////


// DOM Elements
const form = document.querySelector("form");
const reviewsSection = document.querySelector(".reviews");
const starRatingDisplay = document.querySelector(".starRating");

// Render a single review
function renderReview(review) {
  const container = document.createElement("div");
  container.classList.add("review_container");

  const img = document.createElement("img");
  img.src = review.image;

  const textDiv = document.createElement("div");

  const usernameP = document.createElement("p");
  usernameP.textContent = review.username;

  const starP = document.createElement("p");
  starP.textContent = "⭐️".repeat(review.star);

  const reviewP = document.createElement("p");
  reviewP.textContent = review.review;

  textDiv.appendChild(usernameP);
  textDiv.appendChild(starP);
  textDiv.appendChild(reviewP);

  container.appendChild(img);
  container.appendChild(textDiv);

  reviewsSection.appendChild(container);
}

// Render all reviews
function renderAllReviews() {
  reviewsSection.innerHTML = "<h3>Reviews</h3>";
  reviews.forEach(renderReview);
  updateStarRating();
}

// Update average star rating
function updateStarRating() {
  const avg = calculateStarAverage(reviews);
  starRatingDisplay.textContent = `Star Rating: ${avg.toFixed(1)}`;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const image = document.getElementById("image").value;
  const star = parseInt(document.getElementById("star").value);
  const review = document.getElementById("review").value;

  if (!username || !image || !star || !review) {
    alert("Please fill out all fields!");
    return;
  }

  const newReview = {
    username,
    image,
    star,
    review,
  };

  reviews.push(newReview);
  renderAllReviews();
  form.reset();
});

// Initial render
renderAllReviews();

