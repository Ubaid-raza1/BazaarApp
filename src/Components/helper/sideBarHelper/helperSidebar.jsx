export const getSidebarData = (item) => {
  if (item?.name === "Home")
    return item?.items?.home?.map((item) => ({ name: item }));
  if (item?.name === "Mega Menu") return item?.megaMenu;
  if (item?.name === "Full Screen Menu") return item?.fullScreen;
  if (
    item?.name === "Pages" ||
    item?.name === "User Account" ||
    item?.name === "Vendor Account"
  )
    return item?.subItem;
  return false;
};

export const getSidebarDataTwo = (item) => {
  if (item?.name === "Home") return item?.home;
  if (item?.name === "User Account") return item?.userAccount;
  if (item?.name === "Vendor Account") return item?.vendorAccount;
  if (item?.name === "Product") return item?.product;
  if (item?.name === "Orders") return item?.order;
  if (item?.name === "Sale Page") return item?.salePage;
  if (item?.name === "Shop") return item?.shop;
  if (
    item?.name === "Sale Pages" ||
    item?.name === "Vendor" ||
    item?.name === "Shops" ||
    item?.name === "Orders" ||
    item?.name === "Profiles" ||
    item?.name === "Address" ||
    item?.name === "Support Tickets" ||
    item?.name === "Products" ||
    item?.name === "Order"
  )
    return item?.item;
    return false;
};