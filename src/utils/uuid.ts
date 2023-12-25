export const getUUID = () => {
  return Math.random().toString(36).substring(2, 9);
};
