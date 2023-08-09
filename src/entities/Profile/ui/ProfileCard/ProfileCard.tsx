import { useTranslation } from "react-i18next";

import { Profile } from "entities/Profile/model/types/profile";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Mods, classNames } from "shared/lib/classNames/classNames";

import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузку профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} alt={data?.username || "avatar"} />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.firstName}
          placeholder={t("Имя")}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastName}
          placeholder={t("Фамилия")}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t("Возраст")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t("Имя пользователя")}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t("Введите ссылку на аватар")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
