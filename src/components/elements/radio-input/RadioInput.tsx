import React from 'react';

import Icon from '@images/pervoklasnik/Icon.png';
import Image from 'next/image';
import styled from 'src/components/elements/radio-input/RadioInput.module.scss';

const RadioInput = () => (
  <div className={styled.box}>
    <div className={styled.input}>
      <input type="radio" />
    </div>
    <div className={styled.text}>Основной</div>
    <div className={styled.image}>
      <Image src={Icon} />
    </div>
  </div>
);

export default RadioInput;
