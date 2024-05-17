import React from "react";
import MediaCard from "./card";

function Dashboard() {
  const input_list = [
    { name: "Janek", surname: "Kowalski", content: "Jakiś opis Janka" },
    { name: "Tom", surname: "Jakiś", content: "Jakiś opis Oli" },
    { name: "Piotrula", surname: "Zaszczany", content: "Jakiś opis Piotruli" },
    { name: "Jan", surname: "Adamczewski", content: "Jakiś opis Jana" },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
