export const enum TrackingStepState {
    STEP_0_START_PAGE = -1,
    STEP_1_INVESTMENT_CYCLE = 0,
    STEP_2_INVESTMENT_DURATION = 1,
    STEP_3_INVESTMENT_TYPE = 2,
    STEP_4_MANAGEMENT = 3,
    STEP_5_INVESTMENT_PURPOSE = 4,
    STEP_6_RESULTS = 5,
    STEP_7_PRODUCT = 6,
    STEP_7_IFA_CALLED = 7,
    STEP_8_IFA_SENT = 8,
}

export const trackingStepsLookup: { [key: number]: string } = {
    [TrackingStepState.STEP_0_START_PAGE]: "Schritt_0_Startseite",
    [TrackingStepState.STEP_1_INVESTMENT_CYCLE]: "Schritt_1_Anlagezyklus",
    [TrackingStepState.STEP_2_INVESTMENT_DURATION]: "Schritt_2_Anlagedauer",
    [TrackingStepState.STEP_3_INVESTMENT_TYPE]: "Schritt_3_Anlagetyp",
    [TrackingStepState.STEP_4_MANAGEMENT]: "Schritt_4_Management",
    [TrackingStepState.STEP_5_INVESTMENT_PURPOSE]: "Schritt_5_Anlagezweck",
    [TrackingStepState.STEP_6_RESULTS]: "Schritt_6_Ergebnis",
    [TrackingStepState.STEP_7_PRODUCT]: "Schritt_7_Produktseite_aufgerufen",
    [TrackingStepState.STEP_7_IFA_CALLED]: "Schritt_7_IFA_aufgerufen",
    [TrackingStepState.STEP_8_IFA_SENT]: "Schritt_8_IFA_abgeschickt",
};
export const enum TrackingStepOrigin {
    ORIGIN_START = "herkunft_start",
    ORIGIN_RESTART = "herkunft_neustart",
    ORIGIN_REQUEST = "herkunft_aufruf",
    ORIGIN_NEXT = "herkunft_weiter",
    ORIGIN_BACK = "herkunft_zurück",

}
