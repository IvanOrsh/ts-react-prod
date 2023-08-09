import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors";

// Returned
// ThunkArg
// ThunkApiConfig
export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  "profile/updateProfileDate",
  // Declare the type your function argument here:
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>("/profile", formData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  },
);