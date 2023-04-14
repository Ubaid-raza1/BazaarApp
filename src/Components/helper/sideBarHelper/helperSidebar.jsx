export const getSidebarData = (item) => {
  const product = ["Pages", "User Account", "Vendor Account"];
  if (item?.name === "Home")
    return item?.items?.home?.map((item) => ({ name: item }));
  if (item?.name === "Mega Menu") return item?.megaMenu;
  if (item?.name === "Full Screen Menu") return item?.fullScreen;
  if (product.includes(item?.name)) return item?.subItem;
  return false;
};

export const getSidebarDataTwo = (item) => {
  const nestedProduct = [
    "Sale Pages",
    "Vendor",
    "Shops",
    "Orders",
    "Profiles",
    "Address",
    "Support Tickets",
    "Products",
    "Order",
  ];
  const nestedProductTwo = [
    "Fashion",
    "Electronics",
    "Books",
    "Sports and Outdoors",
    "Software",
    "Toys and Game",
  ];
  if (item?.name === "Home") return item?.home;
  if (item?.name === "User Account") return item?.userAccount;
  if (item?.name === "Vendor Account") return item?.vendorAccount;
  if (item?.name === "Product") return item?.product;
  if (item?.name === "Orders") return item?.order;
  if (item?.name === "Sale Page") return item?.salePage;
  if (item?.name === "Shop") return item?.shop;
  if (nestedProductTwo.includes(item?.name)) return item?.item;
  if (nestedProduct.includes(item?.name)) return item?.item;
  return false;
};

export const getSidebarDataThree = (item) => {
  const nestedProduct = [
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
  if (nestedProduct.includes(item?.head)) return item?.subItem;
};
