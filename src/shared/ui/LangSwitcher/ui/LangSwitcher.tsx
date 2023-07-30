import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    const language = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(language);
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
