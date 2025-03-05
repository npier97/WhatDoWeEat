import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/User";

export interface HeroState {
    loading: boolean;
    error: string;
    users: User[];
}
  
const initialState: HeroState = {
    loading: false,
    error: "",
    users: [],
};

const heroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    }
});

export const { setLoading, setError, setUsers } = heroSlice.actions;
export default heroSlice.reducer;