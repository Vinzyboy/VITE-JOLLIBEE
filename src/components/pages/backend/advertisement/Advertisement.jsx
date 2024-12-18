import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Plus } from "lucide-react";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import AdvertisementTable from "./AdvertisementTable";
import ModalAddAdvertisement from "./ModalAddAdvertisement";

const Advertisement = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, SetItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    SetItemEdit(null);
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="advertisement" />
          <main>
            <Header
              title="Advertisement"
              subtitle="Manage Kiosk Advertisement"
            />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <AdvertisementTable
                itemEdit={itemEdit}
                SetItemEdit={SetItemEdit}
              />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddAdvertisement itemEdit={itemEdit} SetItemEdit={SetItemEdit} />
      )}
    </>
  );
};

export default Advertisement;
