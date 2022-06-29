import { trackingStepsLookup } from "../../../data/trackingStep.data";

const tracking = (step:number, details01:string = "", details02:string = "") => {
    const stepValue = trackingStepsLookup[step];
    const windowLocationOrigin = window.location.origin;
    const trackingUrl = new URL(`${windowLocationOrigin}/de/home/misc/break.html`);
    trackingUrl.searchParams.append("kat", "dyn_anwendung");
    trackingUrl.searchParams.append("modul", "FunktionenGfsFinder");
    trackingUrl.searchParams.append("komponente", "GfsFinder");
    trackingUrl.searchParams.append("step", stepValue);
    trackingUrl.searchParams.append("details01", details01);
    trackingUrl.searchParams.append("details02", details02);
    fetch(trackingUrl.toString());
};

export default tracking;
