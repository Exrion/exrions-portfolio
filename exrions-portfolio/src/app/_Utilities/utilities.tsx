import QueryString from "qs";
import { useEffect, useState } from "react";

export function getQueryParams() {
    const url = window.location.search;
    const [, params] = url.split('?');
    const parsedParams = QueryString.parse(params);
    return parsedParams;
}