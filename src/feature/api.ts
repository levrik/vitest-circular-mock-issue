import { fetchData } from '../core';

export async function getData(id: string) {
    return fetchData(id);
}
