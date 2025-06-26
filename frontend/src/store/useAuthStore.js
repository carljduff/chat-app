import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({authUser:res.data});
        } catch(error) {
            // console.log("Error in Checking: ", error);
            set({authUser:null});
            console.log("ERROR AUTH USER NULL IS NULL: ", error)
        } finally {
            set({ isCheckingAuth: false });
        }
    },

}));