const ROUTES = {
  MAIN: "/main",
  CREATE: "/create",
  DETAIL: (programId: number) => `/detail/${programId}`,
  EDIT: (programId: number) => `/edit/${programId}`,
  ERROR: "/error",
  LOGIN: "/login",
  LOGGIN_IN: "/login/logging-in",
};

Object.freeze(ROUTES);
export default ROUTES;
