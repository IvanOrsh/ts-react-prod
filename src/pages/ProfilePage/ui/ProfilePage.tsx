import { useCallback, useEffect } from "react";

import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import {
  fetchProfileData,
  profileReducer,
  ProfileCard,
  getProfileError,
  getProfileIsLoading,
  profileActions,
  getProfileReadonly,
  getProfileForm,
} from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { classNames } from "shared/lib/classNames/classNames";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getProfileForm);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          firstName: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastName: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const isValidNumber = /^[0-9]+$/.test(value || ""); // Regex to match only digits
      if (isValidNumber) {
        dispatch(
          profileActions.updateProfile({
            age: Number(value || 0),
          }),
        );
      } else {
        // Handle invalid input here, like showing an error message
        dispatch(
          profileActions.updateProfile({
            age: 0,
          }),
        );
      }
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency: currency || Currency.USD,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.updateProfile({
          country: country || Country.Kazakhstan,
        }),
      );
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
