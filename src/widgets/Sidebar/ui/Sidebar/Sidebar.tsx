import { useMemo, memo, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    ));
  }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
        data-testid="sidebar-toggle"
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
