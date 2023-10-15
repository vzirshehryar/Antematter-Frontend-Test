import { useState } from "react";

import Header from "./Header";
import Cards from "./Cards";

const Dashboard = () => {
  const [reload, setReload] = useState(false);
  console.log("reloaded");
  return (
    <main className="Dashboard w-full">
      <Header />
      <div className="flex justify-between items-center my-5 mx-16">
        <h2>Dashboard</h2>
        <div
          onClick={() => setReload(!reload)}
          className="p-1.5 rounded-xl flex justify-center items-center max-w-max cursor-pointer"
          style={{ background: "#131417" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_1011)">
              <path
                d="M4.04999 11C4.30287 9.07074 5.25021 7.29978 6.71467 6.01862C8.17912 4.73747 10.0603 4.03395 12.0061 4.03977C13.9518 4.04559 15.8287 4.76034 17.2855 6.05023C18.7423 7.34012 19.679 9.11672 19.9204 11.0475C20.1617 12.9782 19.6911 14.9307 18.5967 16.5395C17.5022 18.1483 15.859 19.3031 13.9745 19.7877C12.0901 20.2723 10.0936 20.0534 8.35886 19.1722C6.6241 18.2909 5.26999 16.8077 4.54999 15M4.04999 20V15H9.04999"
                stroke="#808287"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9212 11.0474C20.1625 12.9782 19.6919 14.9307 18.5975 16.5395C17.503 18.1483 15.8598 19.303 13.9753 19.7876C12.0909 20.2722 10.0944 20.0534 8.35966 19.1722C6.6249 18.2909 5.27078 16.8076 4.55078 15M4.05078 20V15H9.05078"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1011">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <Cards reload={reload}/>
    </main>
  );
};

export default Dashboard;
