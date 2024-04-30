type ObjectKeys<T> = Extract<keyof T, string | number>;

export const getObjectKeys = <T extends Record<string, unknown>>(
  entity: T,
): ObjectKeys<T>[] => {
  const filteredKeys = Object.entries(entity)
    .filter(([key]) => isNaN(parseInt(key)))
    .map(([key]) => key) as ObjectKeys<T>[];

  return filteredKeys;
};
