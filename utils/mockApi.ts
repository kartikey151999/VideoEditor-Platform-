// utils/mockApi.ts
export const fakeProcessing = (duration = 2000): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };
  