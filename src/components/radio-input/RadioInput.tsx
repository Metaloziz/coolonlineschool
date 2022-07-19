import React from 'react';
import Image from "next/image";
import Icon from "@images/pervoklasnik/Icon.png";
import styled from "./RadioInput.module.scss"



const RadioInput = () => {
  return (
    <div className={styled.box}>
      <div className={styled.input}><input type="radio"/></div>
      <div className={styled.text}>Основной</div>
      <div className={styled.image}><Image src={Icon}/></div>
    </div>
  );
};

export default RadioInput;
