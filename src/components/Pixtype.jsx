import React from "react";
import cellPhone from "../assets/images/cellphone.png";
import emailIcon from "../assets/images/email.png";
import shuffle from "../assets/images/shuffle.png";
import contactCard from "../assets/images/contact-card.png";
import { useState } from "react";
const Pixtype = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const pixType = [
    {
      image: contactCard,
      text: "CPF/CNPJ",
    },
    {
      image: cellPhone,
      text: "Telephone",
    },
    {
      image: emailIcon,
      text: "Email",
    },
    {
      image: shuffle,
      text: "Random",
    },
  ];
  return (
    <div className="flex gap-5 mb-7">
      {pixType?.map(({ image, text }, index) => {
        return (
          <div
            key={index}
            onClick={() => setActiveBtn(index)}
            className={`flex flex-col justify-center  items-center ${
              activeBtn === index ? "bg-red text-white" : ""
            } rounded-full w-16 h-16 border border-grey`}
          >
            <img src={image} alt="" className="w-[25px]" />
            <p className="text-[0.56rem]">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pixtype;
