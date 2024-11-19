import React from "react";
import SliderBanner from "./SliderBanner";
import MenuTitle from "./MenuTitle";
import SideNav from "./SideNav";
import MenuList from "./MenuList";
import ModalCart from "./ModalCart";

const Order = () => {
  return (
    <>
      {" "}
      <SliderBanner />
      <div className="grid grid-rows-[auto,_1fr,_auto] min-h-[calc(100vh-200px)]">
        <MenuTitle />

        <section className="grid grid-cols-[150px,_1fr] bg-primary px-3">
          <aside className="m-1 bg-white rounded-md h-[60vh] overflow-y-scroll custom-scroll">
            <SideNav />
          </aside>
          <main className="m-1 bg-white rounded-md h-[60vh] overflow-y-scroll custom-scroll">
                      <MenuList />
                      {/* <ModalCart/> */}
          </main>
        </section>
        <div className="flex p-1 px-3 justify-between items-center bg-primary text-white">
          <button className="px-4 py-2 border border-white rounded-md bg-white text-primary">
            Cancel
          </button>
          <div className="px-4 py-2 border border-white rounded-md w-[300px] text-center">
            <small>Total order</small>
            <h3 className="mb-0">P 0.00</h3>
          </div>
          <button className="px-4 py-2 bg-secondary text-white rounded-md">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
