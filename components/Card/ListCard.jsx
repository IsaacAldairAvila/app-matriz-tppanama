import React from "react";
import Card from "./Card";
import Router from "next/router";
const ListCard = ({ list }) => {
  return (
    <div className="cards">
      {list.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          color={item.color}
          onClick={() => {
            Router.push({
              pathname: item.pathname,
            });
          }}
        >
          {item.icon}
        </Card>
      ))}
    </div>
  );
};

export default ListCard;
