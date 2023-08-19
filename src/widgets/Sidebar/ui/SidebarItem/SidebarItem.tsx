import { useTranslation } from "react-i18next";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/types/sidebar";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useAppSelector } from "shared/lib/hooks";
import { getUserAuthData } from "entities/User";

import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { Icon, path, text } = item;
  const mods: Mods = {
    [cls.collapsed]: collapsed,
  };

  // TODO: refactor
  const isAuth = useAppSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(cls.SidebarItem, mods, [])}
      theme={AppLinkTheme.PRIMARY}
      to={path}
    >
      <Icon className={cls.icon} />
      <span className={cls.link}>{t(text)}</span>
    </AppLink>
  );
};
