import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    const language = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(language);
  };

  const switcherTitle = short ? t("Короткий язык") : t("Язык");

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      <span className={cls.title}>{switcherTitle}</span>
    </Button>
  );
};
