export const converObjectToArray = (objectToTransform:any) => {
  const objArray: any = [];
  Object.keys(objectToTransform).forEach((key: any) =>
    objArray.push({
      name: key,
      options: objectToTransform[key],
    })
  );
  return objArray;
};
