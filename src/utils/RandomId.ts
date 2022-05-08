export const getRandomId = (step?: 10 | 100 | 1000): number => {
  let id: number;
  switch (step) {
    case 10:
      id = Math.floor(Math.random() * 11);
      break;
    case 100:
      id = Math.floor(Math.random() * 101);
    case 1000:
      id = Math.floor(Math.random() * 1001);
    default:
      id = Math.floor(Math.random() * 1001);
      break;
  }
  return id;
};

getRandomId();
