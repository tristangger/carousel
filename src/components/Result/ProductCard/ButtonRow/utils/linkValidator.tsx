const linkValidator = (link:string):string => {
    const isLinkEmpty = link === "";
    const linkIncludesHTML = link.includes(".html");
    if (isLinkEmpty || linkIncludesHTML) {
        return link;
    }
    try {
        const url = new URL(link);
        return url.toString();
    } catch (e) {
        return `${link}.html&stref=GfsFinder`;
    }
};

export default linkValidator;
