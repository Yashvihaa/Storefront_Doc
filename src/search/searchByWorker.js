// Stands in for @easyops-cn/docusaurus-search-local's worker client (swapped in by
// src/plugins/audience.ts) so tenants never get results for super-admin pages.
import {
  fetchIndexesByWorker as originalFetchIndexes,
  searchByWorker as originalSearch,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker.js';
import {currentAudience, isSuperAdminPath} from '../audience';

export const fetchIndexesByWorker = originalFetchIndexes;

// Extra results asked for when filtering, so dropping super-admin pages still leaves a full list.
const FILTER_HEADROOM = 50;

export async function searchByWorker(baseUrl, searchContext, input, limit) {
  if (currentAudience() === 'super-admin') return originalSearch(baseUrl, searchContext, input, limit);

  const results = await originalSearch(baseUrl, searchContext, input, limit + FILTER_HEADROOM);
  if (!Array.isArray(results)) return results;

  return results.filter(result => !isSuperAdminPath(result?.document?.u ?? result?.page?.u)).slice(0, limit);
}
