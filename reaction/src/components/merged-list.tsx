import React from "react";
type Item = { id: number; name: string };

export const MergedList = () => {
  const original: Item[] = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  const updates: Item[] = [
    { id: 2, name: "B2" },
    { id: 3, name: "C" },
  ];
  console.log([...original, ...updates]);
  const mergedArray: Item[] = [];
  const updateRecords: Record<number, number> = {};
  updates.forEach((updatesElement: Item) => {
    if (!updateRecords[updatesElement.id]) {
      updateRecords[updatesElement.id] = 1;
    } else updateRecords[updatesElement.id] += 1;
  });
  original.forEach((originalElement: Item) => {
    if (!updateRecords[originalElement.id]) {
      mergedArray.push(originalElement);
    }
  });
  const finalArray = [...mergedArray, ...updates];
  //   const mergedArray = new Set([...original, ...updates]);
  console.log(updateRecords);
  console.log(mergedArray);
  console.log(finalArray);
  return <></>;
};
