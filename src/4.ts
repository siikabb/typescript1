// export {}; // hack to ignore Book from task 3
// TODO Define the 'ElectronicDevice' interface (or type)
type ElectronicDevice = {
  type: string;
  brand: string;
  model: string;
  title: null;
  author: null;
};

// Define the 'Book' interface (or type)
type Book = {
  type: string;
  title: string;
  author: string;
  brand: null;
  model: null;
};

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
  // TODO: Prompt user for electronic device details (brand and model)
  const brand = prompt("Enter brand of the device")!;
  const model = prompt("Enter model of the device")!;
  // TODO: return object containing brand and model
  const device: ElectronicDevice = {
    type: "electronic",
    brand: brand,
    model: model,
    title: null,
    author: null,
  };
  return device;
}

function createBook(): Book {
  // TODO: Prompt user for book details (title and author)
  const title = prompt("Insert title of the book")!;
  const author = prompt("Insert author of the book")!;
  // TODO: return object containing title and author
  const book: Book = {
    type: "book",
    title: title,
    author: author,
    brand: null,
    model: null,
  };
  return book;
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === "electronic") {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log("Electronic Device Details:");
displayProductDetails(electronicProduct);

console.log();

console.log("Book Details:");
displayProductDetails(bookProduct);
