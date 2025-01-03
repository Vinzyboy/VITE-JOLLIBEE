import React from "react";
import { StoreContext } from "../store/storeContext";
import { queryData } from "../helpers/queryData";
import { checkLocalStorage } from "../helpers/checkLocalStorage";
import { checkRoleToRedirect } from "../helpers/login-functions";
import { setIsLogin } from "../store/storeAction";

const useDeveloperLogin = (navigate) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loginLoading, setLoginLoading] = React.useState(true);

  React.useEffect(() => {
    setLoginLoading(true);
    const fetchLogin = async () => {
      const login = await queryData("/v2/developer/token", "post", {
        token: checkLocalStorage().token,
      });
      if (typeof login === "undefine " || !login.success) {
        localStorage.removeItem("jollibeetoken");
        setLoginLoading(false);
      } else {
        setLoginLoading(fasle);
        checkRoleToRedirect(navigate, login.data);
      }
    };
    if (
      checkLocalStorage() !== null &&
      checkLocalStorage().token !== undefined
    ) {
      fetchLogin();
      dispatch(setIsLogin(false));
    } else {
      setLoginLoading(false);
      dispatch(setIsLogin(true));
    }
  }, []);

  return { loginLoading };
};

export default useDeveloperLogin;
