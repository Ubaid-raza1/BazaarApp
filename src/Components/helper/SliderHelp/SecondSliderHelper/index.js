export const getCardWidth = (parentRef) => {
    if (window.innerWidth > 959) {
      return `${parentRef?.current?.clientWidth * 0.25 - 18.75}px`;
    } else if (window.innerWidth > 649) {
      return `${parentRef?.current?.clientWidth * 0.333 - 16.66}px`;
    } 
    else if (window.innerWidth > 499) {
      return `${parentRef?.current?.clientWidth * 0.5 - 12.5}px`;
    }
    else if (window.innerWidth > 0) {
      return `${parentRef?.current?.clientWidth}px`;
    }
    return undefined;
  };
  