import QueryString from "qs";

export function getQueryParams() {
    const url = window.location.search;
    const [, params] = url.split('?');
    const parsedParams = QueryString.parse(params);
    return parsedParams;
}