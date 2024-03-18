// an array of routes that are accessible to the public
// these routes don't require authentication
// @type {string[]}

export const publicRoutes = ["/", "/auth/new-verification"];

//these routes are used for authentication
//these routes will redirect login users to settings
//@type {string[]}
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset-password",
  "/auth/new-password",
];

//the prefix for API authentication routes, needn't be protected
// routes that start with this prefix are used for api authentication purpose
//@type {string}
export const apiAuthPrefix = "/api/auth";

// the default redirect path after loggin in
// @type {strings}
export const DEFAULT_LOGIN_REDIRECT = "/settings";
