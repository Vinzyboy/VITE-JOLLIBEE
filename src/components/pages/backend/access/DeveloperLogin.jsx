import {
  imgPath,
  setStorageRoute,
} from "@/components/helpers/functions-general";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "Yup";
import { Form, Formik } from "formik";
import { InputText } from "@/components/helpers/FormInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { checkRoleToRedirect } from "@/components/helpers/login-functions";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import useDeveloperLogin from "@/components/custom-hook/useDeveloperLogin";

const DeveloperLogin = () => {
  const { dispatch } = React.useContext(StoreContext);
  const [showIconPassword, setShowIconPassword] = React.useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const [showPassword, setShowPassword] = React.useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { loginLoading } = useDeveloperLogin(navigate);
  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/developer/ login", "POST", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["developer"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_developer_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });

  React.useEffect(() => {
    function setThemeColor() {
      const html = document.querySelector("html");
      html.setAttribute("class", "");
      html.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  const handleChangePasswordInput = (e) => {
    if (e.target.value === "") {
      setShowIconPassword(false);
    } else {
      setShowIconPassword(true);
    }
  };

  const initVal = {
    user_developer_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_developer_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      {loginLoading ? (
        <FetchingSpinner />
      ) : (
        <main className="h-screen bg-primary center-all">
          <div className="login-main bg-secondary max-w-[320px] w-full p-4 border border-line rounded-md">
            <img
              src={`${imgPath}/jollibee-logo.webp`}
              alt=""
              className="w-[150px] mx-auto mb-2"
            />
            <h5 className="text-center">Welcome to Jollibee Kiosk</h5>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input-wrap">
                      <InputText
                        label="email"
                        type="email"
                        className="!py-2"
                        name="user_developer_email"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="input-wrap">
                      <InputText
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        className="!py-2"
                        name="password"
                        onChange={(e) => handleChangePasswordInput(e)}
                        disabled={mutation.isPending}
                      />
                      {showIconPassword && (
                        <button
                          className="absolute bottom-2.5 right-2"
                          onClick={() => setShowPassword(!showPassword)}
                          type="button"
                        >
                          {showPassword ? (
                            <Eye size={18} />
                          ) : (
                            <EyeClosed size={18} />
                          )}
                        </button>
                      )}
                    </div>
                    <p className="text-right">
                      <Link
                        to="/developer/forgot-password"
                        className="text-xs italic hover:text-accent"
                      >
                        Forgot Password
                      </Link>
                    </p>

                    <button
                      type="submit"
                      className="btn btn-accent w-full center-all mt-5"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? <SpinnerButton /> : "Login"}
                    </button>

                    <Link
                      to="/"
                      className="text-sm text-center block mt-5 hover:text-accent"
                    >
                      Go Back To Kiosk
                    </Link>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </main>
      )}
    </>
  );
};

export default DeveloperLogin;
