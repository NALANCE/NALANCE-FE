import React from "react";

export const routes = {
  Onboarding: React.lazy(() => import("../pages/Onboarding/Onboarding.jsx")),
  User1: React.lazy(() => import("../pages/User/User1/User1.jsx")),
  User2: React.lazy(() => import("../pages/User/User2/User2.jsx")),
  Login: React.lazy(() => import("../pages/Login/Login.jsx")),
  Todo: React.lazy(() => import("../pages/Todo/Todo.jsx")),
  Daily: React.lazy(() => import("../pages/Daily/Daily.jsx")),
  Monthly: React.lazy(() => import("../pages/Monthly/Monthly.jsx")),
  Mypage: React.lazy(() => import("../pages/Mypage/Mypage.jsx")),
  ModEmail: React.lazy(() => import("../pages/Mypage/ModEmail/ModEmail.jsx")),
  ModPass: React.lazy(() => import("../pages/Mypage/ModPass/ModPass.jsx")),
  ModCategory: React.lazy(() => import("../pages/Mypage/ModCategory/ModCategory.jsx")),
  Notice: React.lazy(() => import("../pages/Mypage/Notice/Notice.jsx")),
  Ask: React.lazy(() => import("../pages/Mypage/Ask/Ask.jsx")),
  Logout: React.lazy(() => import("../pages/Mypage/Logout/Logout.jsx")),
  Drop: React.lazy(() => import("../pages/Mypage/Drop/Drop.jsx")),
};
