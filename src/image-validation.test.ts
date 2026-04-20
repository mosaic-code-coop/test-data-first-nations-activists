import { validateImageUrls } from 'test-data-factory';
import dataPackage from './index.js';

validateImageUrls(dataPackage, {
  datasetName: 'First Nations Activists Dataset',
  httpTimeout: 15000,
});
