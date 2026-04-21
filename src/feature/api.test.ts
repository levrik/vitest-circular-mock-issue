import { describe, expect, it, vi } from 'vitest';

import { getData } from './api';
import { fetchAndProcess } from './process';

vi.mock('./api');

describe('vi.mock with circular re-export', () => {
    it('mock should intercept getData', async () => {
        vi.mocked(getData).mockResolvedValueOnce({ ok: false });

        await fetchAndProcess('id');

        expect(getData).toHaveBeenCalledWith('id');
    });
});
