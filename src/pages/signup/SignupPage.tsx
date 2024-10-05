import InputText from "@components/inputText/InputText";

const SignupPage = () => {
  return (
    <div style={{ padding: "1.5rem" }}>
      <InputText
        disabled
        placeholder="12121"
        label="전화번호"
        description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.\n신중하게 입력해주세요.`}
        button={{ children: "버튼" }}
      />
      <InputText placeholder="12121" />
    </div>
  );
};
export default SignupPage;
