import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { getUserAuthData } from "entities/User";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");

  // can be refactored to a custom selector
  const authData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const readonly = useAppSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <>
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t("Отменить")}
              </Button>
              <Button
                className={cls.saveBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
              >
                {t("Сохранить")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
