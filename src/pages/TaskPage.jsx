import React, { useEffect, useState } from "react";
import MyTable from "../components/MyTable";
import Header from "../components/Header";
import Search from "../components/Search";

export default function TaskPage({ tasks }) {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isSearched, setIsSearched] = useState(true);

  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const searchResult = data.filter(
          (value) => value.user_name === searchData
        );
        console.log(searchResult);
        if (searchResult.length === 0) {
          setIsSearched(false);
        }
        if (searchResult.length > 0) {
          setIsSearched(true);
        }

        setData(searchResult);
      });
  }, [searchData, setData]);

  const getSearchResult = (value) => {
    setSearchData(value);
  };

  return (
    <>
      <Header />
      <Search
        getSearch={getSearchResult}
        setSearchData={setSearchData}
        setIsSearched={setIsSearched}
      />

      {data.length ? (
        <MyTable data={data} />
      ) : isSearched ? (
        <h1>...loading</h1>
      ) : (
        <></>
      )}
    </>
  );
}
