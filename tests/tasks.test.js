const request = require('supertest');
const app = require('../src/app');

describe('GET /api/tasks', () => {
    it('should return tasks list', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);

        // Handle possible shapes: { tasks: [...] } or { tasks: { tasks: [...] } }
        let items = null;
        if (Array.isArray(res.body.tasks)) {
            items = res.body.tasks;
        } else if (res.body.tasks && Array.isArray(res.body.tasks.tasks)) {
            items = res.body.tasks.tasks;
        }

        expect(Array.isArray(items)).toBe(true);
        expect(items.length).toBeGreaterThanOrEqual(1);
        expect(items[0]).toHaveProperty('id');
        expect(items[0]).toHaveProperty('description');
    });
});
