import { FaAngleRight, FaAngleDown, FaCaretRight } from "react-icons/fa";
import offer from "../images/offer-1.webp";
import offerTwo from "../images/offer-5.webp";

export const DropDown = [
  {
    id: 1,
    name: "Fashion",
    icon: <FaAngleRight />,
    subItems: [
      {
        mainClothes: ["Man Clothes", "Shirt", "T-shirt", "Pant", "Underwear"],
        accessories: ["Accessories", "Belt", "Hat", "Watches", "Sunglass"],
        shoes: ["Shoes", "Sneakers", "Sandals", "Formal", "Casual"],
        bags: ["Bags", "Backpack", "Crossbody Bags", "Side Bags", "Slides"],
      },
    ],
    img: offer,
  },
  {
    id: 2,
    name: "Electronics",
    icon: <FaAngleRight />,
    subItems: [
      {
        mainClothes: ["Man Clothes", "Shirt", "T-shirt", "Pant", "Underwear"],
        accessories: ["Accessories", "Belt", "Hat", "Watches", "Sunglass"],
        shoes: ["Shoes", "Sneakers", "Sandals", "Formal", "Casual"],
        bags: ["Bags", "Backpack", "Crossbody Bags", "Side Bags", "Slides"],
      },
    ],
    img: offerTwo,
  },
  {
    id: 3,
    name: "Bikes",
    icon: <FaAngleRight />,
    Items: [
      {
        name: "Man",
        faAngleRight: <FaCaretRight />,
        ManSubItem: [
          {
            mainClothes: [
              "Man Clothes",
              "Shirt",
              "T-shirt",
              "Pant",
              "Underwear",
            ],
            accessories: ["Accessories", "Belt", "Hat", "Watches", "Sunglass"],
            shoes: ["Shoes", "Sneakers", "Sandals", "Formal", "Casual"],
            bags: ["Bags", "Backpack", "Crossbody Bags", "Side Bags", "Slides"],
          },
        ],
      },
      { name: "Women", icon: "" },
      { name: "Baby Boy", icon: "" },
      { name: "Baby Girl", icon: "" },
    ],
  },
  {
    id: 4,
    name: "Home & Garden",
    icon: <FaAngleRight />,
    subItems: [
      {
        mainClothes: ["Man Clothes", "Shirt", "T-shirt", "Pant", "Underwear"],
        accessories: ["Accessories", "Belt", "Hat", "Watches", "Sunglass"],
        shoes: ["Shoes", "Sneakers", "Sandals", "Formal", "Casual"],
        bags: ["Bags", "Backpack", "Crossbody Bags", "Side Bags", "Slides"],
      },
    ],
  },
  {
    id: 5,
    name: "Gifts",
    icon: <FaAngleRight />,
    Items: [
      {
        name: "Fashion",
        icon: "",
      },
      {
        name: "Electronics",
        icon: "",
      },
      {
        name: "Bikes",
        icon: "",
      },
      {
        name: "Home & Garden",
        icon: "",
      },
      {
        name: "Gifts",
        icon: "",
      },
      {
        name: "Music",
        icon: "",
      },
      {
        name: "Health & Beauty",
        icon: "",
      },
      {
        name: "Pets",
        icon: "",
      },
      {
        name: "Baby Toys",
        icon: "",
      },
      {
        name: "Groceries",
        icon: "",
      },
      {
        name: "Automotive",
        icon: "",
      },
    ],
  },
  { id: 6, name: "Music" },
  { id: 7, name: "Health & Beauty" },
  { id: 8, name: "Pets" },
  { id: 9, name: "Baby Toys" },
  { id: 10, name: "Groceries" },
  { id: 10, name: "Automotive" },
];

export const DropDowntwo = [
  {
    id: 1,
    name: "Home",
    isSingle: true,
    icon: <FaAngleDown />,
    items: {
      home: [
        "Market 1",
        "Market 2",
        "Furniture",
        "Grocery 1",
        "Grocery 2",
        "Grocery 3",
        "Health & Beauty",
        "Fashion 1",
        "Fashion 2",
        "Fashion 3",
        "Gift Store",
        "Gadget",
      ],
    },
  },
  {
    id: 2,
    name: "Mega Menu",
    isFourComp: true,
    icon: <FaAngleDown />,
    megaMenu: [
      {
        name: "Home",
        iconDown: <FaAngleDown />,
        home: [
          { name: "Home" },
          { name: "Market 1" },
          { name: "Furniture" },
          { name: "Grocery-v1" },
          { name: "Grocery-v2" },
          { name: "Grocery-v3" },
          { name: "Health and Beauty" },
          { name: "Fashion" },
          { name: "Gift Store" },
          { name: "Gadget" },
        ],
      },
      {
        name: "User Account",
        iconDown: <FaAngleDown />,
        userAccount: [
          { name: "User Account" },
          { name: "Order List" },
          { name: "Order Details" },
          { name: "View Profile" },
          { name: "Edit Profile" },
          { name: "Address List" },
          { name: "Add Address" },
          { name: "All tickets" },
          { name: "Ticket details" },
          { name: "Wishlist" },
        ],
      },
      {
        name: "Vendor Account",
        iconDown: <FaAngleDown />,
        vendorAccount: [
          { name: "Vendor Account" },
          { name: "Dashboard" },
          { name: "Profile" },
        ],
      },
      {
        name: "Product",
        iconDown: <FaAngleDown />,
        product: [
          { name: "Product" },
          { name: "All Products" },
          { name: "Add/Edit Product" },
        ],
      },
      {
        name: "Orders",
        iconDown: <FaAngleDown />,
        order: [
          { name: "Orders" },
          { name: "All Orders" },
          { name: "Order Detail" },
        ],
      },
      {
        name: "Sale Page",
        iconDown: <FaAngleDown />,
        salePage: [
          { name: "Sale Page" },
          { name: " Sales Version 1" },
          { name: "Sales Version 2" },
        ],
      },
      {
        name: "Shop",
        iconDown: <FaAngleDown />,
        shop: [
          { name: " Shop" },
          { name: "Search product" },
          { name: "Single product" },
          { name: "Cart" },
          { name: "Checkout" },
          { name: "Alternative Checkout" },
          { name: "Order confirmation" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Full Screen Menu",
    isFullScreen: true,
    icon: <FaAngleDown />,
    fullScreen: [
      {
        name: "Fashion",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,
        item: [
          {
            head: "Men's Fashion",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: " T-Shirt", icon: "" },
              { name: "Formal Shirt", icon: "" },
              { name: "Shirt", icon: "" },
              { name: "Shoes", icon: "" },
              { name: "Jeans Pant", icon: "" },
              { name: "Gabardin Pant", icon: "" },
              { name: "Formal Pant", icon: "" },
              { name: "Sunglass", icon: "" },
              { name: "Formal Shoes", icon: "" },
              { name: "Lungi", icon: "" },
              { name: "Tunk", icon: "" },
              { name: "Jacket", icon: "" },
            ],
          },
          {
            head: "Women's Fashion",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Clothing", icon: "" },
              { name: "Shoes", icon: "" },
              { name: "Jewelry", icon: "" },
              { name: "Watches", icon: "" },
              { name: "Hand Bags", icon: "" },
              { name: "Accessories", icon: "" },
              { name: "Makeup", icon: "" },
              { name: "Clothing", icon: "" },
              { name: "Shoes", icon: "" },
              { name: "Jewelry", icon: "" },
              { name: "Watches", icon: "" },
              { name: "Hand Bags", icon: "" },
            ],
          },
          {
            head: "Girls' Fashion",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Clothing", icon: "" },
              { name: "Shoes", icon: "" },
              { name: "Jewelry", icon: "" },
              { name: "Watches", icon: "" },
              { name: "Hand Bags", icon: "" },
              { name: "Gadget", icon: "" },
              { name: "Clothing", icon: "" },
              { name: "Watches", icon: "" },
              { name: "Shoes", icon: "" },
              { name: "Gadget", icon: "" },
              { name: "Jewelry", icon: "" },
              { name: "Hand Bags", icon: "" },
            ],
          },
        ],
      },
      {
        name: "Electronics",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,
        item: [
          {
            head: "Accessories & Supplies",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Audio & Video Accessories", img: "" },
              { name: "Cables", img: "" },
              { name: "Microphones", img: "" },
              { name: "Cord Management", img: "" },
              { name: "Power Protection", img: "" },
              { name: "Cell Phone Accessories", img: "" },
            ],
          },
          {
            head: "Power Accessories",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "AC Adapters", img: "" },
              { name: "Isolation Transformers", img: "" },
              { name: "Line Conditioners", img: "" },
              { name: "PDUs", img: "" },
              { name: "Power Converters", img: "" },
            ],
          },
          {
            head: "Video Game Consoles & Accessories",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "PlayStation 4", img: "" },
              { name: "PlayStation 3", img: "" },
              { name: "Xbox One", img: "" },
              { name: "Nintendo Switch", img: "" },
              { name: "Sony PSP", img: "" },
            ],
          },
        ],
      },
      {
        name: "Books",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,
        item: [
          {
            head: "Arts & Photography",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Architecture" },
              { name: "Business of Art" },
              { name: "History & Criticism" },
              { name: "Individual Artists" },
              { name: "Photography & Video" },
              { name: "Study & Teaching" },
            ],
          },
          {
            head: "Biographies & Memoirs",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Arts & Literature" },
              { name: "Leaders & Notable People" },
              { name: "Professionals & Academics" },
              { name: "Sports & Outdoors" },
              { name: "True Crime" },
            ],
          },
          {
            head: "Children's Books",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Action & Adventure" },
              { name: " Animals" },
              { name: "Biographies" },
              { name: "Geography & Cultures" },
              { name: "Holidays & Celebrations" },
            ],
          },
        ],
      },
      {
        name: "Sports and Outdoors",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,
        item: [
          {
            head: "Outdoor Recreation",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Accessories" },
              { name: "Camping & Hiking" },
              { name: "Climbing" },
              { name: "Cycling" },
              { name: "Paintball" },
              { name: "Water Sports" },
            ],
          },
          {
            head: "Exercise & Fitness",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Balance Trainers" },
              { name: "Cardio Training" },
              { name: "Fitness Technology" },
              { name: "Footwear" },
              { name: "Running" },
            ],
          },
          {
            head: "Sports Medicine",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Athletic Tape & Supplies" },
              { name: "First Aid Kits" },
              { name: "Padding Supplies" },
              { name: "Mouthguards" },
            ],
          },
        ],
      },
      {
        name: "Software",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,
        item: [
          {
            head: "Accounting & Finance",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Business Accounting" },
              { name: "Check Printing" },
              { name: "Personal Finance" },
              { name: "Tax Preparation" },
            ],
          },
          {
            head: "Antivirus & Security",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Antivirus" },
              { name: "Internet Security Suites" },
              { name: "Parental Control" },
            ],
          },
          {
            head: "Business & Office",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Communication" },
              { name: " Contact Management" },
              { name: "Database Management" },
              { name: "Document Management" },
              { name: "Office Suites" },
            ],
          },
        ],
      },
      {
        name: "Toys and Game",
        icon: <FaAngleRight />,
        iconDown: <FaAngleDown />,

        item: [
          {
            head: "Arts & Crafts",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Adhesives" },
              { name: "Aprons & Smocks" },
              { name: "Clay & Dough" },
              { name: "Craft Kits" },
            ],
          },
          {
            head: "Baby & Toddler Toys",
            iconDown: <FaAngleDown />,
            subItem: [
              { name: "Activity Centers" },
              { name: "Balls" },
              { name: "Bath Toys" },
              { name: "Car Seat & Stroller Toys" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Pages",
    isTwoComp: true,
    icon: <FaAngleDown />,
    subItem: [
      {
        id: 1,
        name: "Sale Pages",
        iconDown: <FaAngleDown />,
        item: [{ name: "Version 1" }, { name: "Version 2" }],
        icon: <FaCaretRight />,
      },
      {
        id: 2,
        name: "Vendor",
        iconDown: <FaAngleDown />,
        item: [{ name: "All Vendors" }, { name: "Vendor Store" }],
        icon: <FaCaretRight />,
      },
      {
        id: 3,
        name: "Shop",
        iconDown: <FaAngleDown />,
        item: [
          { name: "Search Product" },
          { name: "Single Product" },
          { name: "Cart" },
          { name: "Checkout" },
          { name: "Alternative Checkout" },
          { name: "Order Confirmation" },
        ],
        icon: <FaCaretRight />,
      },
    ],
  },

  {
    id: 5,
    name: "User Account",
    isTwoComp: true,
    icon: <FaAngleDown />,
    subItem: [
      {
        id: 1,
        name: "Orders",
        iconDown: <FaAngleDown />,
        item: [{ name: "Order List" }, { name: "Order Detail" }],
        icon: <FaCaretRight />,
      },
      {
        id: 2,
        name: "Profiles",
        iconDown: <FaAngleDown />,
        item: [{ name: "View Profile" }, { name: "Edit Profile" }],
        icon: <FaCaretRight />,
      },
      {
        id: 3,
        name: "Address",
        iconDown: <FaAngleDown />,
        item: [{ name: "Address List" }, { name: "Address Details" }],
        icon: <FaCaretRight />,
      },
      {
        id: 4,
        name: "Support Tickets",
        iconDown: <FaAngleDown />,
        item: [{ name: "All Tickets" }, { name: "Tickets Details" }],
        icon: <FaCaretRight />,
      },
      { name: "Wishlist" },
    ],
  },
  {
    id: 6,
    name: "Vendor Account",
    isTwoComp: true,
    icon: <FaAngleDown />,
    subItem: [
      { name: "Dashboard" },
      {
        id: 2,
        name: "Products",
        iconDown: <FaAngleDown />,
        item: [{ name: "All Products" }, { name: "Add/Edit Product" }],
        icon: <FaCaretRight />,
      },
      {
        id: 3,
        name: "Order",
        iconDown: <FaAngleDown />,
        item: [{ name: "All Orders" }, { name: "Order Details" }],
        icon: <FaCaretRight />,
      },
      { name: "Profile" },
    ],
  },
];
