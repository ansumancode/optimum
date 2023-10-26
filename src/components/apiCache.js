const apiCache = {};

export function getFromCache(key) {
  return apiCache[key];
}

export function setInCache(key, data) {
  apiCache[key] = data;
  console.log(`Data cached for key: ${key}`);
}
