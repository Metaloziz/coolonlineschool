import React, { useState } from 'react';

import downloadImage from '@svgs/button/download-image.svg';
import Image from 'next/image';

import styles from './InputFile.module.scss';

const InputFile = () => {
  const [fileName, setFileName] = useState('');

  const getFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  return (
    <div className={styles.uploadFile}>
      <label htmlFor="custom-file-upload" className={styles.filupp}>
        <div className={styles.customFileButton}>
          <span className={styles.arrowBtn}>
            <Image src={downloadImage} alt="arrow" width={24} height={24} />
          </span>
          <p>Загрузить договор</p>
        </div>
        <input type="file" onChange={getFileName} id="custom-file-upload" />
      </label>
    </div>
  );
};

export default InputFile;
