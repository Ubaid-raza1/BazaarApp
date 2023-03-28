export const getCardWidth = (presentRef) => {
  if (window.innerWidth > 949) {
    return `${
      presentRef?.current?.clientWidth * 0.1666666666666667 - 20.83333333333333
    }px`;
  } else if (window.innerWidth > 649) {
    return `${presentRef?.current?.clientWidth * 0.25 - 18.75}px`;
  } else if (window.innerWidth > 369) {
    return `${presentRef?.current?.clientWidth * 0.5 - 12.5}px`;
  } else if (window.innerWidth > 0) {
    return `${presentRef?.current?.clientWidth}px`;
  } else return undefined;
};