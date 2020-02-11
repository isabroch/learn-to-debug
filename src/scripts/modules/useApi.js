const useApi = async (root, resource) => {
  const response = fetch(root + resource);
  const data = response.json();
  return data;
}

export useApi;