import { useMemo, useState } from "react";
import searchicon from "../assets/search-line.svg"
const SearchBar = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  

//   let mind= aray.filter((v)=>{
//     v.productName==searchInput

//   })
//  setList(mind)

  return (
    <>

    
      <div className="searchBox flex ">
       <div>
       <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="searchInput rounded-lg w-[15rem] bg-pink-950 p-2 text-white"
          type="text"
          name=""
          placeholder="Search"
        />
       </div>
        <button onClick={() => {}} className="searchButton ml-[13rem] mt-2 absolute" href="#">
        <img className="size-[1.5rem] fill-white" src={searchicon} alt="" />
        </button>
      </div>
    </>
  );
};
export default SearchBar;
