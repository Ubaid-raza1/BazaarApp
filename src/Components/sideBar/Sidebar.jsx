import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, SHOP } from "../../reducer/Action";
import shoppingBag from "../../images/shopping-bag.svg";
import SideBarHelperList from "../helper/sideBarHelper/SideBarHelperList";
import "./Sidebar.css";
import Button from "../button/Button";

const Sidebar = ({ setIndex, index }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const AllCounts = state?.cardCount?.reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue?.count || 0) * currentValue?.prizeCurrent,
    0
  );


  const Plus = (item) => {
    dispatch({
      type: SHOP,
      payload: { count: item.count++, ...item },
    });
  };
  index === 1
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const Minus = (item) => {
    if (item?.count > 1) {
      dispatch({
        type: SHOP,
        payload: { count: item.count--, ...item },
      });
    }
  };

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
      <div
        className="sidebar"
        style={{
          transform: `scaleX(${index})`,
          width: !!state?.cardCount?.length ? "360px" : "218px",
          overflowY: !!state?.cardCount?.length && "scroll",
        }}
      >
        <div className="sliderButton">
          <span>
            <AiOutlineShopping id="sidebarShopIcon" />
            <span id="headerItemCount">{state?.cardCount?.length} item</span>
          </span>
          <AiOutlineClose id="sidebarCloseIcon" onClick={() => setIndex(0)} />
        </div>
        {!!state?.cardCount?.length ? (
          <div className="sidebarDataAndBtn">
            <div className="sideBarData">
              <SideBarHelperList
                arr={state?.cardCount}
                Plus={Plus}
                Minus={Minus}
                Delete={Delete}
              />
            </div>
            <div className="sidebarButtons">
              <Button
                className={"sidebarButtonOne"}
                value={`Checkout Now ($${AllCounts.toFixed(2).toString()})`}
              />
              <Button className={"sidebarButtonTwo"} value="View Cart" />
            </div>
          </div>
        ) : (
          <div className="emptyItem">
            <img src={shoppingBag} />
            <div className="emptyItemTxt">
              Your shopping bag is empty. Start shopping
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
