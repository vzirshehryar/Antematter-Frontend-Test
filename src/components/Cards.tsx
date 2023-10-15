import { useState, useEffect } from "react";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

import "./Animation.css";
import Card from "./Card";

const data = [
  "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 1.png",
  "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 2.png",
  "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 3.png",
];

const Cards = ({ reload }: { reload: Boolean }) => {
  const [imageOrder, setImageOrder] = useState(data);
  const [position, setPosition] = useState({
    direction: "default",
    pos0: 0,
    pos1: 350,
    pos2: 700,
  });
  const fetchData = async () => {
    try {
      const connection = new Connection(clusterApiUrl("mainnet-beta"));
      const keypair = Keypair.generate();
      const metaplex = Metaplex.make(connection)
        .use(keypairIdentity(keypair))
        .use(bundlrStorage());

      // const owner = new PublicKey(
      //   "narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"
      // );
      // const myNfts = await metaplex.nfts().findAllByOwner({
      //   owner: owner,
      // });
      const mintAddress = new PublicKey(
        "ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL"
      );

      const nft = await metaplex.nfts().findByMint({ mintAddress });
      console.log(nft);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [reload]);

  const left = () => {
    if (position.pos0 === 0)
      setPosition({
        direction: "left",
        pos0: 700,
        pos1: position.pos1 - 350,
        pos2: position.pos2 - 350,
      });
    if (position.pos1 === 0)
      setPosition({
        direction: "left",
        pos1: 700,
        pos2: position.pos2 - 350,
        pos0: position.pos0 - 350,
      });
    if (position.pos2 === 0)
      setPosition({
        direction: "left",
        pos2: 700,
        pos0: position.pos0 - 350,
        pos1: position.pos1 - 350,
      });
    // const newOrder = [...imageOrder];
    // var elem = newOrder.shift();
    // if (elem !== undefined) newOrder.push(elem);
    // setImageOrder(newOrder);
  };
  const right = () => {
    if (position.pos0 === 0)
      setPosition({
        direction: "left",
        pos0: position.pos0 + 350,
        pos1: position.pos1 + 350,
        pos2: 0,
      });
    if (position.pos1 === 0)
      setPosition({
        direction: "left",
        pos1: position.pos1 + 350,
        pos2: position.pos2 + 350,
        pos0: 0,
      });
    if (position.pos2 === 0)
      setPosition({
        direction: "left",
        pos2: position.pos2 + 350,
        pos0: position.pos0 + 350,
        pos1: 0,
      });
    // const newOrder = [...imageOrder];
    // var elem = newOrder.pop();
    // if (elem !== undefined) newOrder.unshift(elem);
    // setImageOrder(newOrder);
  };

  return (
    <section className="flex justify-center items-center flex-col gap-7 mt-16">
      <div className="Animation_Container">
        {/* <div className="Animation flex justify-center items-center gap-8"> */}
        {imageOrder.map((val, ind) => {
          return <Card val={val} ind={ind} position={position} />;
        })}
      </div>
      <div
        className="bg-black flex justify-between rounded-full p-2.5 mb-16"
        style={{ width: "270px" }}
      >
        <div
          className="flex justify-between items-center p-3 rounded-full cursor-pointer"
          style={{ background: "#18191D" }}
          onClick={left}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M7.24081 14.1768L21.1167 0.33925C21.5713 -0.113854 22.3074 -0.113092 22.7612 0.341594C23.2148 0.796221 23.2136 1.53268 22.7589 1.98614L9.70894 15.0001L22.7594 28.0139C23.214 28.4674 23.2152 29.2034 22.7617 29.6581C22.5342 29.886 22.2361 30 21.9381 30C21.6408 30 21.3439 29.8868 21.1168 29.6604L7.24081 15.8233C7.02184 15.6054 6.89897 15.309 6.89897 15.0001C6.89897 14.6911 7.0222 14.395 7.24081 14.1768Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className="flex justify-between items-center p-3 rounded-full cursor-pointer"
          style={{ background: "#18191D" }}
          onClick={right}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M22.7592 14.1768L8.88331 0.33925C8.42868 -0.113854 7.69263 -0.113092 7.23876 0.341594C6.78525 0.796221 6.78642 1.53268 7.24111 1.98614L20.2911 15.0001L7.24064 28.0139C6.78601 28.4674 6.78484 29.2034 7.23829 29.6581C7.46581 29.886 7.76388 30 8.06194 30C8.35925 30 8.65614 29.8868 8.88325 29.6604L22.7592 15.8233C22.9782 15.6054 23.101 15.309 23.101 15.0001C23.101 14.6911 22.9778 14.395 22.7592 14.1768Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Cards;
