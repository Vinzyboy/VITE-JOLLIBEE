export const urlJollibeeLocal = "http://localhost/vite-jollibee"; //from thunder client
export const imgPath = "http://localhost/vite-jollibee/public/img";

// ONLINE DEV and LOCAL hris
export const devApiUrl = `${urlJollibeeLocal}/rest`;

export const devBaseImgUrl = `${imgPath}`;
export const devBaseUrl = `${urlJollibeeLocal}`;

// dev key from thunder client
export const ver = "v1";
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};
