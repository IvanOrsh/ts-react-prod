import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

// Returned
// ThunkArg
// ThunkApiConfig
export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  "profile/fetchProfileData",
  // Declare the type your function argument here:
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>("/profile");
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
