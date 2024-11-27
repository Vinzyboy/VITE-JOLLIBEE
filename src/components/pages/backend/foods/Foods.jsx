import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Searchbar from "../partials/Searchbar";
import { Plus } from "lucide-react";
import { setIsAdd } from "@/components/store/storeAction";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import { StoreContext } from "@/components/store/storeContext";
import ModalAddFoods from "./ModalAddFoods";
import FoodsTable from "./FoodsTable";

const Foods = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="foods" />
          <main>
            <Header title="Foods" subtitle="Manage Kiosk Food Items" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <FoodsTable setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddFoods itemEdit={itemEdit} />}
    </>
  );
};

export default Foods;
