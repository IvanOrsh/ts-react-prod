import { useTranslation } from "react-i18next";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import { Mods, classNames } from "shared/lib/classNames/classNames";

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
