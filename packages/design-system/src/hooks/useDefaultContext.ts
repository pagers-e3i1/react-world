import { useContext } from "react";

function useDefaultContext<T>(context: React.Context<T | null | undefined>) {
  const value = useContext(context);
  if (value === null || value === undefined) {
    throw new Error(
      `${context.displayName}를 정의된 스코프 안에서만 사용 가능해요.`,
    );
  }
  return value;
}

export default useDefaultContext;
