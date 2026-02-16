// ===================== utility functions ====================
function removeActiveClass() {
  const allCategoryButtons = document.querySelectorAll(".shared-cat-btn");
  // console.log(allCategoryButtons);
  allCategoryButtons.forEach((btn) => btn.classList.remove("active"));
}

function manageSpinner(status) {
  if (status === true) {
    document.getElementById("loading-spinner").classList.remove("hidden");
    document.getElementById("products-container").classList.add("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
    document.getElementById("products-container").classList.remove("hidden");
  }
}

// ========================
// === load function 01 ===
// ========================
const loadCategories = async () => {
  const url1 = `https://fakestoreapi.com/products/categories`;
  const res = await fetch(url1);
  const data = await res.json();
  // console.log(data);
  displayCategories(data);
};

// ========================
// === load function 02 ===
// ========================
const loadProducts = async (item) => {
  // loading spinner show before products loaded
  manageSpinner(true);
  const url2 = `https://fakestoreapi.com/products/category/${item}`;
  const res = await fetch(url2);
  const data = await res.json();
  // console.log(data);
  removeActiveClass();
  const clickedBtn = document.getElementById(`unique-cat-btn-${item}`);
  // console.log(clickedBtn);
  clickedBtn.classList.add("active");
  displayProducts(data);
};

// ========================
// === load function 03 ===
// ========================
const loadCardDetails = async (id) => {
  // console.log(id);
  const url3 = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url3);
  const data = await res.json();
  // console.log(data);
  displayCardDetails(data);
};

// ========================
// === load function 04 ===
// ========================
const loadAllStocks = async () => {
  const url4 = `https://fakestoreapi.com/products`;
  const res = await fetch(url4);
  const data = await res.json();
  // console.log(data);
  displayAllStocks(data.slice(0, 3));
};

// ========================================================
// === display function 01 ================================
// ========================================================
const displayCategories = (data) => {
  // console.log(data);
  // step 01
  const categoryBtnContainer = document.getElementById(
    "category-btn-container",
  );
  // stop safely
  if (!categoryBtnContainer) return;
  // console.log(categoryBtnContainer);
  // step 02
  for (let item of data) {
    // console.log(item);
    // step 03
    const button = document.createElement("button");
    button.id = `unique-cat-btn-${item}`;
    button.classList.add("btn", "rounded-full", "shared-cat-btn");
    button.textContent = ` ${item}`;
    // console.log(button);
    // executes on click event listener function
    button.addEventListener("click", () => {
      loadProducts(item);
    });
    // step 04
    categoryBtnContainer.appendChild(button);
  }
};

// ========================================================
// === display function 02 ================================
// ========================================================
const displayProducts = (items) => {
  // console.log(items);
  // step 01
  const productsContainer = document.getElementById("products-container");
  // stop safely
  if (!productsContainer) return;
  productsContainer.innerHTML = "";
  // console.log(productsContainer);
  // step 02
  items.forEach((product) => {
    // console.log(product);
    // step 03
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-sm h-80">
            <figure class="bg-base-300">
              <img
                src=${product?.image} class="h-36 py-6"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between">
                <div class="btn btn-sm rounded-full text-primary">${
                  product?.category
                }</div>
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-star text-warning"></i>
                  <p>${product?.rating.rate}(${product?.rating.count})</p>
                </div>
              </div>
              <p>${product?.title.slice(0, 25)}...</p>
              <h2 class="card-title">$ ${product?.price}</h2>
              <div class="card-actions justify-between">
                <button onclick="loadCardDetails(${product?.id})" class="btn btn-sm">
                  <i class="fa-regular fa-eye"></i>
                  <span>Details</span>
                </button>
                <button class="btn btn-sm btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
    `;
    // step 04
    productsContainer.append(div);
  });
  // loading spinner hide after products displayed
  manageSpinner(false);
};

// ========================================================
// === display function 03 ================================
// ========================================================
const displayCardDetails = (info) => {
  // console.log(info);
  // step 01
  const modalContainer = document.getElementById("modal-container");
  if (!modalContainer) return;
  // console.log(modalContainer);
  // step 02
  modalContainer.innerHTML = `
    <h1 class="text-xl"> <span class="font-semibold">Title : </span>
        ${info?.title}
    </h1>
    <p> <span class="text-md font-medium">Description : </span>
        ${info?.description}
    </p>
    <p> <span class="text-md font-medium">Price : </span>
        ${info?.price} $
    </p>
    <p> <span class="text-md font-medium">Rating : </span> 
        ${info?.rating.rate} *
     </p>
    <button class="btn btn-primary">Buy Now</button>
  `;
  // show modal function
  document.getElementById("details_modal").showModal();
};

// ========================================================
// === display function 04 ================================
// ========================================================
const displayAllStocks = (data) => {
  // console.log(data);
  // step 01
  const trendingContainer = document.getElementById("trending-container");
  if (!trendingContainer) return;
  // console.log(trendingContainer);
  // step 02
  data.forEach((product) => {
    // step 03
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-sm h-80">
            <figure class="bg-base-300">
              <img
                src=${product?.image} class="h-36 py-6"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between">
                <div class="btn btn-sm rounded-full text-primary">${
                  product?.category
                }</div>
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-star text-warning"></i>
                  <p>${product?.rating.rate}(${product?.rating.count})</p>
                </div>
              </div>
              <p>${product?.title.slice(0, 25)}...</p>
              <h2 class="card-title">$ ${product?.price}</h2>
              <div class="card-actions justify-between">
                <button onclick="loadCardDetails(${product?.id})" class="btn btn-sm">
                  <i class="fa-regular fa-eye"></i>
                  <span>Details</span>
                </button>
                <button class="btn btn-sm btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
    `;
    // step 04
    trendingContainer.append(div);
  });
};

// === load function invoke ===
loadCategories();
loadAllStocks();
