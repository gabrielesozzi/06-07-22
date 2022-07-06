const getProductHTML = (product) => {
  const { img, name, author, price, id } = product;

  return `<li class="bookCard"><img src="${img}"><p class="title">${name}</p>
  <p>${author}</p>
    <p>${price}€</p>
    <button id="${id}" class="showInfo">Verifica disponibilità e prezzi!</button></li>`;
};

const shop = {
  name: "Book Store",
  productsList: [],
  numberPage: 1, // pagina corrente
  elPerPage: 4, // numero di risultati per pagina
  _id: 0,

  get getProducts() {
    const firstIndex = (this.numberPage - 1) * this.elPerPage;
    const lastIndex = firstIndex + this.elPerPage;

    const paginatedProducts = this.productsList.slice(firstIndex, lastIndex);
    return paginatedProducts;
  },

  get getPrice() {
    alert(
      `Prezzo prodotto: ${this.productsList[this._id].price}€. Ancora ${
        this.productsList[this._id].stock
      } pezzi disponibili.`
    );
  },

  set idValue(id) {
    this._id = id;
  },

  set setProducts(productCatalog) {
    this.productsList = productCatalog;
    this.renderHTML();
  },

  set setPage(newPage) {
    this.numberPage = newPage;
    this.renderHTML();
  },

  renderHTML() {
    const shop = document.querySelector(".shopContainer");
    const productsHTML = this.getProducts.map(getProductHTML).join("");

    shop.innerHTML = `
    <ul class="bookCardList">${productsHTML}</ul>
    <p>Pagina: ${this.numberPage}</p>
    `;
  },
};

const buttonChangePage = document.querySelector(".buttonsThroughPages");

buttonChangePage.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const newPage = Number(button.id);
    shop.setPage = newPage;
  }
});

const booksContainer = document.querySelector(".shopContainer");

booksContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.idValue = event.target.id - 1;
    console.log(event.target.id);
    shop.getPrice;
  }
});

shop.setProducts = [
  {
    id: 1,
    name: "Il conte di Montecristo",
    author: "Alexandre Dumas",
    price: 12.99,
    img: "https://www.rizzolilibri.it/content/uploads/2014/03/20/211929/474277-DumasILCONTE300dpi-280x431.jpg",
    stock: 10,
  },
  {
    id: 2,
    name: "L'assassinio del commendatore",
    author: "Haruki Murakami",
    price: 20,
    img: "https://www.einaudi.it/content/uploads/2019/11/978880624314HIG.JPG",
    stock: 22,
  },
  {
    id: 3,
    name: "L'étranger",
    author: "Albert Camus",
    price: 9.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglAIokbLqkUHKzVPSIg7zGmeUa_-vXQw3Dg&usqp=CAU",
    stock: 2,
  },
  {
    id: 4,
    name: "Bel-Ami",
    author: "Guy de Maupassant",
    price: 15,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg884FfZmdzMl-GAhDtjt8ZKiaOKvuei7OOw&usqp=CAU",
    stock: 4,
  },
  {
    id: 5,
    name: "L'art de perdre",
    author: "Alice Zeniter",
    price: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4FZ9RFZBzN8EL1jNVtt04cZ1xAXbSVXQLA&usqp=CAU",
    stock: 8,
  },
  {
    id: 6,
    name: "L'éleéance du hérisson",
    author: "Muriel Barbery",
    price: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvewa5BlX8M0b7HVWDiTbzu060YEpHvgSLjg&usqp=CAU",
    stock: 8,
  },
  {
    id: 7,
    name: "La famosa invasione degli orsi in Sicilia",
    author: "Dino Buzzati",
    price: 14,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjCuYYxkLBa_nR3dUTVz0ut8UcYi96JRxUw&usqp=CAU",
    stock: 24,
  },
  {
    id: 8,
    name: "Novecento. Un monologo.",
    author: "Alessandro Barricco",
    price: 8.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02yAmaE9auo2gfErIwSB8686HPoTmh2PCcQ&usqp=CAU",
    stock: 10,
  },
  {
    id: 9,
    name: "Il richiamo della foresta",
    author: "Jack London",
    price: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG0ayrTIXF7cAWpKcFb1VCGy3mijdkTBkMA&usqp=CAU",
    stock: 8,
  },
  {
    id: 10,
    name: "I tre moschettieri",
    author: "Alexandre Dumas",
    price: 18,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmAGWKqIz7V5l4ql_ukQqmRZ60v0KU6VEEg&usqp=CAU",
    stock: 2,
  },
  {
    id: 11,
    name: "Siddhartha",
    author: "Hermann Hesse",
    price: 7.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9xv7bF1EsltpOOZhmr8ZUQ54kQ1KxIgbCQ&usqp=CAU",
    stock: 10,
  },
  {
    id: 12,
    name: "la nuit des temps",
    author: "René Barjavel",
    price: 9.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZ8BdEzwYlxonb4s87mQILAA7vAKnWmTnIg&usqp=CAU",
    stock: 4,
  },
  {
    id: 13,
    name: "L'insostenibile leggerezza dell'essere",
    author: "Milan Kundera",
    price: 18.99,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1648031447l/4097499._SY475_.jpg",
    stock: 5,
  },
  {
    id: 14,
    name: "La donna in bianco",
    author: "Wilkiea Collins",
    price: 18.99,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342802439l/9753732.jpg",
    stock: 1,
  },
  {
    id: 15,
    name: "Bartleby lo scrivano",
    author: "Herman Melville",
    price: 7.99,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386629414l/9649410.jpg",
    stock: 10,
  },
  {
    id: 16,
    name: "L'incolore Tazaki Tsukuru",
    author: "Haruki Murakami",
    price: 12,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400687625l/22072036.jpg",
    stock: 8,
  },
];
