import {
  faComputer,
  faFlagCheckered,
  faMessage,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import React from "react";

const Analysis = () => {
  const infos = [
    {
      id: 1,
      name: "Countries",
      logo: faFlagCheckered,
      quantity: 165,
    },
    {
      id: 2,
      name: "Complete Projects",
      logo: faComputer,
      quantity: 540,
    },
    {
      id: 3,
      name: "Happy Clients",
      logo: faUsers,
      quantity: 630,
    },
    {
      id: 1,
      name: "FeedBacks",
      logo: faMessage,
      quantity: 550,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 m-6 mt-24">
      {infos.map((info) => (
        <>
          <div
            className=" flex flex-col items-center gap-4 border m-2 py-6 hover:border-0 hover:shadow-xl uppercase"
            key={info.id}
          >
            <FontAwesomeIcon
              className="text-5xl text-gray-600"
              icon={info.logo}
            />
            <span className="text-3xl text-primary">
              <CountUp duration={5} end={info.quantity} />
              <span>+</span>
            </span>
            <p className="text-xl text-black">{info.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Analysis;
