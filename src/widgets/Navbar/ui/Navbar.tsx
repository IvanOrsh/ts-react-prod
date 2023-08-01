import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import cls from "./Navbart.module.scss";

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t("Войти")}
      </Button>

      <Modal
        className={classNames("modal", {}, [])}
        isOpen={isAuthModal}
        onClose={onToggleModal}
        // eslint-disable-next-line i18next/no-literal-string
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        tempora aspernatur temporibus exercitationem praesentium non voluptatum.
        Ducimus omnis ipsam ut!
      </Modal>
    </div>
  );
};
