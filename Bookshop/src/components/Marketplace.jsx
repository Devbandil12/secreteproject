import React from "react";
import Header from "./Header";
import carticon from "../assets/shopping-cart-2-fill.svg"
import profileicon from "../assets/profile-round-1346-svgrepo-com.svg"
import Card from "./Card";
import SearchBar from "./SearchBar";
import menuicon from "../assets/menu-line.svg"

const items = [
  {
    id: 1,
    productName: "Apple iPhone 14",
    price: "$999",
image:"https://mockuptree.com/wp-content/uploads/edd/2024/09/Free-iPhone-16-Pro-Mockup-960x640.jpg"  },
  {
    id: 2,
    productName: "Samsung Galaxy S23",
    price: "$899",
    image: "https://fscl01.fonpit.de/userfiles/7446224/image/samsung-galaxy-s23-series-cmd7/NextPit-samsung-galaxy-s23-ultra-hands-on-cmd7.jpg",
  },
  {
    id: 3,
    productName: "Google Pixel 7",
    price: "$799",
image:"https://th.bing.com/th/id/OIP.C3RdJxqV2qYbJnKJlu-53wHaE7?rs=1&pid=ImgDetMain"  },
  // Add more items as needed
];

const Marketplace = () => {
  
  
  // const handlecart=()=>{
  //   dispatch(addtocart(item.name))

  // }

  return (
    <div className=" bg-pink-200">
      <Header
      menu={menuicon}
        title={"Market Place"}
        Logopath={carticon}
        profile={profileicon}
      />
      <div className="flex justify-center items-center mt-4"> <SearchBar /></div>

      <div className="grid mt-3 grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
