import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbart.module.scss";

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </div>
  );
};
