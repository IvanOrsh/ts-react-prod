import { Suspense, useEffect } from "react";

import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { getUserMounted, userActions } from "entities/User";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const mounted = useAppSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
