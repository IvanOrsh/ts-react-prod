import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ProfileCard.module.scss";
import { useAppSelector } from "shared/lib/hooks";
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
} from "entities/Profile/model/selectors";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const data = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Профиль")} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.firstName}
          placeholder={t("Ваше имя")}
        />
        <Input
          className={cls.input}
          value={data?.lastName}
          placeholder={t("Ваше фамилия")}
        />
      </div>
    </div>
  );
};
