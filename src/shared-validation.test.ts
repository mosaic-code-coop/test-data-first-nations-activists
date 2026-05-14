import { validateDataPackage } from "@mosaic-code/test-data-factory";
import firstNationsActivistsData from "./index.js";

validateDataPackage(firstNationsActivistsData, {
  datasetName: "First Nations Activists Dataset",
  minBirthYear: 1500, // Historical activists
  maxBirthYear: 2010,
  requireDateOfBirth: false,
  minBioLength: 100,
  containsFirstNationsPeople: true,
  acknowledgeDeceasedFirstNations: true,
  validateReferenceUrls: false, // Disabled due to timeout issues with some URLs
  httpTimeout: 30000,
});
