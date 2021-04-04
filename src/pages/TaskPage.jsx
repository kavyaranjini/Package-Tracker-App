import React, { useEffect, useState } from "react";
import MyTable from "../components/MyTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TaskPage({ tasks }) {
  const [data, setData] = useState([]);

  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [setData]);

  console.log(data);

  return (
    <>
      <Header />
      <MyTable data={data} />
      <Footer />
    </>
  );
}
