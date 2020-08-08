const server = require('../server/index.js');
const db = require('../server/database/index.js');
const images = require('../server/models/images.js');
const axios = require('axios');

describe('Querying the database', () => {
  test('fetchAllByHostelId returns a list of images for valid ids', () => {
    images.fetchAllByHostelId(24, (error, fetchedImages) => {
      expect(fetchedImages.length).toBeGreaterThan(0);
    });
  });

  test('fetchAllByHostelId returns an empty list for ids greater than 100', () => {
    images.fetchAllByHostelId(103, (error, fetchedImages) => {
      expect(fetchedImages.length).toBe(0);
    });
  });
});