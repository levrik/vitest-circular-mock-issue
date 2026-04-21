export async function fetchData(_url: string): Promise<{ ok: boolean }> {
    return { ok: true };
}

// Uncomment the line below to reproduce: vi.mock in feature/api.test.ts stops intercepting ./api
// export { fetchAndProcess } from './feature/index';
