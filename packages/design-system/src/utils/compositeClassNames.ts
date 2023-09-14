/**
 * @description 컴포넌트의 여러 className을 합성하는 함수
 * @param classNameArr css로 정의한 className 배열
 * @param classNameProp 컴포넌트에서 prop으로 받은 className
 * @returns string
 */
export const compositeClassNames = (
  classNameArr: string[],
  classNameProp?: string
): string =>
  classNameArr.join(" ") + (classNameProp ? ` ${classNameProp}` : "");
