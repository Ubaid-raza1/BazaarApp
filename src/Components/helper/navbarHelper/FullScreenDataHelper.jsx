export const getFullScreenData = (item) => {
  const product = [
    "Men's Fashion",
    "Women's Fashion",
    "Girls' Fashion",
    "Accessories & Supplies",
    "Power Accessories",
    "Video Game Consoles & Accessories",
    "Arts & Photography",
    "Biographies & Memoirs",
    "Children's Books",
    "Outdoor Recreation",
    "Exercise & Fitness",
    "Sports Medicine",
    "Accounting & Finance",
    "Antivirus & Security",
    "Business & Office",
    "Arts & Crafts",
    "Baby & Toddler Toys",
  ];
  if (product.includes(item?.head)) return item?.subItem;
};
