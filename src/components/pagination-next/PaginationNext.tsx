import Image from 'next/image';
import { useState } from 'react';
import hoverNext from '@svgs/pagination/next-hover.svg';
import next from '@svgs/pagination/next.svg';

const PaginationNextArrows = () => {
  const [isShowHover, setShowHover] = useState(false);
  return (
    <div
      onMouseOver={() => setShowHover(true)}
      onMouseOut={() => setShowHover(false)}
    >
      <Image
        src={isShowHover ? next : hoverNext}
        alt={'pagination'}
        width={7}
        height={10}
      />
    </div>
  );
};

export default PaginationNextArrows;
