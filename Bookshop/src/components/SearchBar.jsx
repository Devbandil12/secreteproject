import { useMemo, useState } from "react";
const SearchBar = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  

//   let mind= aray.filter((v)=>{
//     v.productName==searchInput

//   })
//  setList(mind)

  return (
    <>

    
      <div className="searchBox">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="searchInput rounded-md bg-pink-950 p-2 text-white"
          type="text"
          name=""
          placeholder="Search"
        />
        <button onClick={() => {}} className="searchButton" href="#">
          <i className="material-icons text-black font-bold mx-1">search</i>
        </button>
      </div>
    </>
  );
};
export default SearchBar;
