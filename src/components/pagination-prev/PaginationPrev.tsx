import Image from 'next/image';
import { useState } from 'react';
import hoverPrevious from '@svgs/pagination/prev-hover.svg';
import previous from '@svgs/pagination/prev.svg';

const PaginationPrevArrows = () => {
  const [isShowHover, setShowHover] = useState(false);
  return (
    <div
      onMouseOver={() => setShowHover(true)}
      onMouseOut={() => setShowHover(false)}
    >
      <Image
        src={isShowHover ? hoverPrevious : previous}
        alt={'pagination'}
        width={7}
        height={10}
      />
    </div>
  );
};

export default PaginationPrevArrows;
