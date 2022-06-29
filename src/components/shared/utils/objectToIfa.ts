/**
 * @description convert an object to an string (urlparamter) for an IFA
 * in the format of key:value;key:value;
 */

type IfaObject = {
    [value: string]: string
}

const objectToIfa = (obj: IfaObject): string => Object.entries(obj)
    .map(([key, value]) => `${key}:${value};`).join("");

export default objectToIfa;
