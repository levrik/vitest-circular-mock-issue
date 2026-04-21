import { getData } from './api';

export async function fetchAndProcess(id: string) {
    const result = await getData(id);

    return result.ok;
}
