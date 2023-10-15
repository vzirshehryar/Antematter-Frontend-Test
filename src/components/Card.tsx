import { useEffect, useState } from "react";

type PostionType = {
  direction: String;
  pos0: number;
  pos1: number;
  pos2: number;
};

type CardProps = {
  val: String;
  ind: number;
  position: PostionType;
};

const Card = ({ val, ind, position }: CardProps) => {
  const [pos, setPos] = useState(0);
  const [zIndex, setZIndex] = useState(1);
  useEffect(() => {
    if (ind === 0) setPos(position.pos0);
    else if (ind === 1) setPos(position.pos1);
    else if (ind === 2) setPos(position.pos2);
    if (pos === 0) setZIndex(0);
    else if (pos === 350) setZIndex(10);
    else if (pos === 700) setZIndex(15);
  }, [position]);

  return (
    <div
      className="bg-black rounded-2xl flex flex-col p-3"
      style={{ width: 320, left: pos, zIndex: zIndex }}
    >
      <div className="flex justify-between items-center px-2">
        <p className="text-base">Cyberlinx #2551</p>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="3"
          viewBox="0 0 15 3"
          fill="none"
        >
          <g opacity="0.6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.5C0 1.89782 0.158035 2.27936 0.43934 2.56066C0.720644 2.84196 1.10218 3 1.5 3C1.89782 3 2.27936 2.84196 2.56066 2.56066C2.84196 2.27936 3 1.89782 3 1.5C3 1.10218 2.84196 0.720644 2.56066 0.43934C2.27936 0.158035 1.89782 0 1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5ZM7.5 3C7.10218 3 6.72064 2.84196 6.43934 2.56066C6.15803 2.27936 6 1.89782 6 1.5C6 1.10218 6.15803 0.720644 6.43934 0.43934C6.72064 0.158035 7.10218 0 7.5 0C7.89782 0 8.27936 0.158035 8.56066 0.43934C8.84196 0.720644 9 1.10218 9 1.5C9 1.89782 8.84196 2.27936 8.56066 2.56066C8.27936 2.84196 7.89782 3 7.5 3ZM13.5 3C13.1022 3 12.7206 2.84196 12.4393 2.56066C12.158 2.27936 12 1.89782 12 1.5C12 1.10218 12.158 0.720644 12.4393 0.43934C12.7206 0.158035 13.1022 0 13.5 0C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5C15 1.89782 14.842 2.27936 14.5607 2.56066C14.2794 2.84196 13.8978 3 13.5 3Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <img
        className="rounded-xl my-2"
        src={`/icons/${val}`}
        alt="Anime"
        width={364}
        height={364}
      />
      <div
        className="flex flex-col gap-3 rounded-lg px-2 py-3 my-2"
        style={{ background: "#18191D" }}
      >
        <div
          className="px-2.5 py-2 flex justify-between items-center rounded-lg"
          style={{ background: "#131417" }}
        >
          <p className="text-sm">Owner</p>
          <p className="text-sm opacity-50">| 72UGr...YdD</p>
        </div>
        <div
          className="px-2.5 py-2 flex justify-between items-center rounded-lg"
          style={{ background: "#131417" }}
        >
          <p className="text-sm">Mint address</p>
          <p className="text-sm opacity-50">| 72UGr...YdD</p>
        </div>
        <div
          className="px-2.5 py-2 flex justify-between items-center rounded-lg"
          style={{ background: "#131417" }}
        >
          <p className="text-sm">Token address</p>
          <p className="text-sm opacity-50">| 72UGr...YdD</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
