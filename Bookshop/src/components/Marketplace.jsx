import React from "react";
import Header from "./Header";

import Card from "./Card";

const items = [
  {
    id: 1,
    productName: "Apple iPhone 14",
    price: "$999",
    image: "https://example.com/iphone14.jpg",
  },
  {
    id: 2,
    productName: "Samsung Galaxy S23",
    price: "$899",
    image: "https://example.com/galaxyS23.jpg",
  },
  {
    id: 3,
    productName: "Google Pixel 7",
    price: "$799",
    image: "https://example.com/pixel7.jpg",
  },
  // Add more items as needed
];

const Marketplace = () => {
  
  
  // const handlecart=()=>{
  //   dispatch(addtocart(item.name))

  // }

  return (
    <div className=" bg-pink-200">
      <Header
        title={"Market Place"}
        Logopath={"school-flag-svgrepo-com.svg"}
        profile={"circle-line.png"}
      />

      <div className="grid mt-3 grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id}>
            <Card
              name={item.productName}
              price={item.price}
              image={item.image}
              incart={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
