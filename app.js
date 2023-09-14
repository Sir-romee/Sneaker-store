const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "jordan",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img/jordan-copy.png",
      },
      {
        code: "blue",
        img: "./img/jordan-copy2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Force",
    price: 138.99,
    colors: [
      {
        code: "blue",
      img: "./img/air-copy.png",
    },
    {
      code: "2E1503",
      img: "./img/air-copy2.png",
    },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 185.99,
    colors: [
      {
        code: "blue",
        img: "./img/blazer-copy.png",
      },
      {
        code: "cornsilk",
        img: "./img/blazer-copy2.png",
      }
    ]
  },
  {
    id: 4,
    title: "Crater",
    price: 250,
    colors: [
      {
        code: "black",
      img: "./img/crater-copy.png",
    },
    {
      code: "purple",
      img: "./img/crater-copy2.png",
    },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 310.89,
    colors: [
      {
        code: "silver",
      img: "./img/hippie-copy.png",
    },
    {
      code: "black",
      img: "./img/hippie-copy2.png",
    },
    ],
  },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img
    
    //assigning new colors
    currentProductColors.forEach((color,index) =>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    }); 
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img  
  });
});

currentProductsizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductsizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click",()=>{
      payment.style.display="flex"
    });

    close.addEventListener("click",()=>{
      payment.style.display="none"
    });