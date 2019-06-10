const products = [
  {
      id: "1",
      title: "Lorem",
      brand: "Dolor sit amet",
      picture: require("./assets/images/products/p1.jpg"),
      cost: 25
  },
  {
      id: "2",
      title: "Ipsum",
      brand: "Consectetur adipiscing elit",
      picture: require("./assets/images/products/p2.jpg"),
      cost: 35.99
  },
  {
      id: "3",
      title: "Vulputate",
      brand: "Dolor sit amet",
      picture: require("./assets/images/products/p3.jpg"),
      cost: 25.99
  },
  {
      id: "4",
      title: "Laoreet",
      brand: "Consectetur adipiscing elit",
      picture: require("./assets/images/products/p4.jpg"),
      cost: 45.99
  },
  {
      id: "5",
      title: "Sed",
      brand: "Dolor sit amet",
      picture: require("./assets/images/products/p5.jpg"),
      cost: 20.99
  },
  {
      id: "6",
      title: "Lectus",
      brand: "Consectetur adipiscing elit",
      picture: require("./assets/images/products/p6.jpg"),
      cost: 22
  },
  {
      id: "7",
      title: "Elit",
      brand: "Dolor sit amet",
      picture: require("./assets/images/products/p7.jpg"),
      cost: 25.99
  },
  {
      id: "8",
      title: "Nunc",
      brand: "Consectetur adipiscing elit",
      picture: require("./assets/images/products/p8.jpg"),
      cost: 21
  },
  {
      id: "9",
      title: "Sollicitudin",
      brand: "Dolor sit amet",
      picture: require("./assets/images/products/p9.jpg"),
      cost: 25.99
  },
  {
      id: "10",
      title: "Nibh",
      brand: "Consectetur adipiscing elit",
      picture: require("./assets/images/products/p10.jpg"),
      cost: 19.99
  }
  ];
  export const getProducts = () => {
      return products;
      
  }