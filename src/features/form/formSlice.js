import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    personalInfo: {
        name: "",
        email: "",
        phone: "",
    },

    selectedPlan: {
        planLength: "monthly",
        option: "arcade" || "advanced" || "pro",
    },

    planOptions: {
        arcade: {
            monthly: 9,
            yearly: 90,
        },
        advanced: {
            monthly: 12,
            yearly: 120,
        },
        pro: {
            monthly: 15,
            yearly: 150,
        },
        onlineService: {
            monthly: 1,
            yearly: 10,
        },
        largerStorage: {
            monthly: 2,
            yearly: 20,
        },
        customizableProfile: {
            monthly: 2,
            yearly: 20,
        },
    },

    addons: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        // Update personal info
        updatePersonalInfo: (state, action) => {
            state.personalInfo = action.payload;
        },

        // Update selected plan
        updateSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },

        // Update addons
        updateAddons: (state, action) => {
            state.addons = action.payload;
        },

        // Go to the next step
        nextStep: (state) => {
            state.step += 1;
        },

        // Go back to the previous step
        prevStep: (state, { payload }) => {
            !payload ? (state.step -= 1) : (state.step -= payload);
        },
    },
});

export const {
    updatePersonalInfo,
    updateSelectedPlan,
    updateAddons,
    nextStep,
    prevStep,
} = formSlice.actions;
export default formSlice.reducer;
