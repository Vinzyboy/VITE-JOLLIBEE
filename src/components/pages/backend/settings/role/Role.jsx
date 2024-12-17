import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import SideNavigation from "../../partials/SideNavigation";
import ModalAddRole from "./ModalAddRole";
import RoleList from "./RoleList";
import ModalSuccess from "@/components/partials/modal/modalSuccess";
import ModalError from "@/components/partials/modal/ModalError";

const Role = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="role" />
          <main>
            <Header title="Role" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex items-end">
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <RoleList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.isAdd && <ModalAddRole itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Role;
