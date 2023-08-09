import { Suspense, memo, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { useAppSelector } from "shared/lib/hooks";
import { getUserAuthData } from "entities/User";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";

const AppRouter = () => {
  // TODO: to be refactored! (supposed to be "protected" routes)

  const isAuth = useAppSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          /*Object.values(routeConfig)*/ routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
