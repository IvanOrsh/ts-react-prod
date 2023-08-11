import { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useAppSelector } from "shared/lib/hooks";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export function RequireAuth(props: PropsWithChildren) {
  const auth = useAppSelector(getUserAuthData);
  const location = useLocation();

  const { children } = props;

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
