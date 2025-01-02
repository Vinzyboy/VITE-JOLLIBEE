import { setError, setIsAdd, setMessage } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import SideNavigation from "../../partials/SideNavigation";

import ModalSuccess from "@/components/partials/modal/modalSuccess";
import ModalError from "@/components/partials/modal/ModalError";
import UserList from "./DeveloperList";
import DeveloperList from "./DeveloperList";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalAddDeveloper from "./ModalAddDeveloper";

const Developer = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { isFetching, data: role } = useQueryData(
    `/v2/role`, // endpoint
    "get", // method
    "role" // key
  );

  const developerRole = role?.data.filter(
    (item) => item.role_is_developer == 1
  );
  console.log(developerRole);

  const handleAdd = () => {
    if (developerRole?.lenght === 0) {
      dispatch(setError(true));
      dispatch(setMessage("Developer role is required"));
    }
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Developer" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <DeveloperList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.isAdd && (
        <ModalAddDeveloper itemEdit={itemEdit} developerRole={developerRole} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Developer;
