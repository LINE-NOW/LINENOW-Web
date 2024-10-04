import { useAtomValue } from "jotai";

import { authAtom } from "@atoms/auth";

const useAuth = () => {
  const auth = useAtomValue(authAtom);

  // 사용자가 로그인했는지 여부 확인
  const isLoggedIn = !!auth;

  // 로그인된 사용자 정보를 반환
  return {
    isLoggedIn,
  };
};

export default useAuth;
