import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, SHOP } from "../../reducer/Action";
import shoppingBag from "../../images/shopping-bag.svg";
import SideBarHelperList from "../helper/sideBarHelper/SideBarHelperList";
import "./Sidebar.css";

const Sidebar = ({ setIndex, index }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
 

  const Plus = (id, item) => {
    dispatch({ type: SHOP, payload: { count: item.count++, ...item } });
  };

  const Minus = (id, item) => {
    if (item?.count > 1) {
      dispatch({ type: SHOP, payload: { count: item.count--, ...item } });
    }
  };
  // console.log("======>", arr);

  const Delete = (id) => {
    dispatch({ type: DELETE, payload: id });
  };

  return (
    <>
      <div
        className="sidebarMain"
        style={{ display: index === 1 ? "block" : "none" }}
        onClick={() => setIndex(0)}
      ></div>
      <div className="sidebar" style={{ transform: `scaleX(${index})` }}>
        <div className="sliderButton">
          <span>
            <AiOutlineShopping id="sidebarShopIcon" />0 item
          </span>
          <AiOutlineClose id="sidebarCloseIcon" onClick={() => setIndex(0)} />
        </div>
        {!!state?.cardCount?.length ? (
          <SideBarHelperList
            arr={state?.cardCount}
            Plus={Plus}
            Minus={Minus}
            Delete={Delete}
          />
        ) : (
          <div>
            <img src={shoppingBag} />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
