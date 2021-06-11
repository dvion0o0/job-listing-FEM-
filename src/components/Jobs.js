import React, { useState, useEffect } from "react";
import Job from "./Job";
import Data from "../data";
import { useGlobalContext } from "../context";

function Jobs() {
  const { filterKeyword } = useGlobalContext();
  const [newData, setNewData] = useState([]);
  console.log(filterKeyword);

  const FilteredData = () => {
    if (filterKeyword) {
      const filter = Data.filter((item) => {
        return filterKeyword.every((key) => {
          return (
            item.role === key ||
            item.level === key ||
            item.languages.includes(key) ||
            item.tools.includes(key)
          );
        });
      });
      setNewData(filter);
    } else {
      setNewData(Data);
    }
  };

  useEffect(() => {
    FilteredData();
  }, [filterKeyword]);

  return (
    <div className="jobs-container">
      <div className="jobs-center">
        {newData.map((item) => {
          return <Job key={item.id} {...item} New={item.new} />;
        })}
      </div>
    </div>
  );
}

export default Jobs;
