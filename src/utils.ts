import outletsData from "@/../data/outlets.json";

const mockDataMap: Record<string, any> = {
  outlets: outletsData,
};

export const mockFetch = (endpoint: string): Promise<any> => {
  const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockDataMap[endpoint];
      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Endpoint "${endpoint}" not found in mock data.`));
      }
    }, delay);
  });
};
