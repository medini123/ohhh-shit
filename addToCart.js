const product = [
  {
    id: 0,
    image: "/images/surgam.jpg",
    title: "surgam 300mg",
    price: 10.5,
    link: "/Produit3.html",
  },
  {
    id: 1,
    image: "/images/3COARTS180C2FRLR-2.jpg",
    title: "Co-Artesiane 60 ml",
    price: 17.5,
    link: "/Produit4.html",
  },
  {
    id: 2,
    image: "/images/petit-chene-croissance-sirop-fl-125ml.png",
    title: "Petit Chêne Croissance Sirop ",
    price: 22.5,
    link: "/Produit.html",
  },
  {
    id: 3,
    image:
      "/images/doliprane-liquiz-douleurs-et-fievre-1000-mg-8-sachets-suspension-buvable.jpg",
    title: "DOLIPRANE 1000 mg ",
    price: 3.5,
    link: "/Produit1.html",
  },
  {
    id: 4,
    image: "/images/3001108.jpg",
    title: "LYSOPAINE ambroxol",
    price: 8.5,
    link: "/Produit2.html",
  },
  {
    id: 5,
    image: "/images/76117746a55ab6fabf2b528bf1869afdf9487f43.jpg",
    title: "Moderna COVID-19 Vaccine",
    price: 10.5,
    link: "/Produit5.html",
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

// function myFunction() {
//   if (product.link == "/Produit3.html") {
//     window.location.href = "/Produit3.html";
//   }
//   // } else if (product == product[1]) {
//   //   window.location.href = "/Produit4.html";
//   // } else if (product == product[2]) {
//   //   window.location.href = "/produit.html";
//   // } else if (product == product[3]) {
//   //   window.location.href = "/produit1.html";
//   // } else if (product == product[4]) {
//   //   window.location.href = "/produit2.html";
//   // } else {
//   //   window.location.href = "/produit5.html";
//   // }
// }
function fonction() {
  var name = prompt("Enter Your Name:");

  if (name == null || name == "") {
    prompt("You did not entert anything. Please enter your name again");
  } else {
    prompt("You enterted: " + name);
  }
}
function anounce() {
  prompt("type yes ,if you want to quit this page !!");
  alert(
    "if you want to see details page press ok ",
    (window.location.href = "/Produit3.html")
  );
}

let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price, link } = item;
    return (
      `
        <div class='img-box'>
        <img class='images' src=${image}></img>

        <p>${title}</p>
        <h2 class='aaaa'>${price}.00</h2> ` +
      "<button class='butto' onclick='fonction() ; addtocart(" +
      i++ +
      ")'>Add to cart  </button>" +
      "<button class='ffff' id='fff' onClick='anounce() ; myFunction()'' > Details</button>" +
      `
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length === 0) {
    document.getElementById("cartiteM").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartiteM").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class ='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
document.getElementById("fff").window.prompt;
