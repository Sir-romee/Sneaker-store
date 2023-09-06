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
        code: "gray",
      img: "./img/air-copy.png",
    },
    {
      code: "brown",
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

let choosenProduct = products[0]

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
