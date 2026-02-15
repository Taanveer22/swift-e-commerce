// ========================
// === load function 01 ===
// ========================
const loadCategories = async () => {
  const url1 = `https://fakestoreapi.com/products/categories`;
  const res = await fetch(url1);
  const data = await res.json();
  displayCategories(data);
};

// ========================
// === load function 02 ===
// ========================
const loadProducts = async (item) => {
  const url2 = `https://fakestoreapi.com/products/category/${item}`;
  const res = await fetch(url2);
  const data = await res.json();
  displayProducts(data);
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
  // console.log(categoryBtnContainer);
  categoryBtnContainer.innerHTML = "";
  // step 02
  for (let item of data) {
    // console.log(item);
    // step 03
    const button = document.createElement("button");
    button.classList.add("btn", "rounded-full");
    button.innerHTML = `
        <span>
            ${item}
        </span>
  `;
    // executes on click event listener function
    button.addEventListener("click", () => {
      loadProducts(item);
    });
    // step 04
    categoryBtnContainer.append(button);
  }
};

// ========================================================
// === display function 02 ================================
// ========================================================
const displayProducts = (items) => {
  console.log(items);
  // step 01
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  // console.log(productsContainer);
  // step 02
  items.forEach((product) => {
    console.log(product);
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
                <button class="btn btn-sm">
                  <i class="fa-regular fa-eye"></i><span>Details</span>
                </button>
                <button class="btn btn-sm btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
    `;
    productsContainer.append(div);
  });
};

// === load function invoke ===
loadCategories();
