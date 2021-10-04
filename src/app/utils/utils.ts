export const getUniqueListBy = (arr: Array<any>, key: string): any[] =>
  arr.filter(
    (v: any, i: number, a: any) =>
      a.findIndex((t: any) => t[key] === v[key]) === i
  );
