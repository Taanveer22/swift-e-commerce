console.log("connected");
// ========================
// === load function 01 ===
// ========================
const loadCategories = async () => {
  const url1 = `https://fakestoreapi.com/products/categories`;
  const res = await fetch(url1);
  const data = await res.json();
  displayCategories(data);
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
  console.log(categoryBtnContainer);
  // categoryBtnContainer.innerHTML = "";
  // step 02
  for (let item of data) {
    // console.log(item);
    // step 03
    const button = document.createElement("button");
    button.innerHTML = `
        <span class="btn btn-ghost rounded-full">
            ${item}
        </span>
  `;
    // step 04
    categoryBtnContainer.append(button);
  }
};

// === load function invoke ===
loadCategories();
