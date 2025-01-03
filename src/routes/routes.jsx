import React from "react";

export const lazyImport = (path) => React.lazy(() => import(`../pages/${path}`));

export const routes = {
  Onboarding: lazyImport("Onboarding/Onboarding.jsx"),
  User1: lazyImport("User/User1/User1.jsx"),
  User2: lazyImport("User/User2/User2.jsx"),
  Login: lazyImport("Login/Login.jsx"),
  Todo: lazyImport("Todo/Todo.jsx"),
  Daily: lazyImport("Daily/Daily.jsx"),
  Monthly: lazyImport("Monthly/Monthly.jsx"),
  Mypage: lazyImport("Mypage/Mypage.jsx"),
  ModEmail: lazyImport("Mypage/ModEmail/ModEmail.jsx"),
  ModPass: lazyImport("Mypage/ModPass/ModPass.jsx"),
  ModCategory: lazyImport("Mypage/ModCategory/ModCategory.jsx"),
  Notice: lazyImport("Mypage/Notice/Notice.jsx"),
  Ask: lazyImport("Mypage/Ask/Ask.jsx"),
  Logout: lazyImport("Mypage/Logout/Logout.jsx"),
  Drop: lazyImport("Mypage/Drop/Drop.jsx"),
};
