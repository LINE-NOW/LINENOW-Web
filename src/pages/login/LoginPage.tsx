import * as S from './LoginPage.styled';
import InputText from '@components/inputText/InputText';
import useForm from '@hooks/useForm';
import Button from '@components/button/Button';

import {
  initialLoginValues,
  LoginFormValues,
  loginValidateConfigs,
} from './LoginValidateConfig';
import validateConfigs from '@utils/validateConfig';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PostSigninRequest } from '@apis/domains/auth/login/_interfaces';

const LoginPage = () => {
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
  });

  const getErrors = (values: LoginFormValues) => {
    const errors = validateConfigs(loginValidateConfigs, values);
    return errors;
  };

  const handleSubmitButton = async () => {
    const requestData: PostSigninRequest = {
      username: values.phonenumber,
      password: values.password,
    };

    try {
      // API 호출
      const response = await instance.post(
        '/api/v1/dj-rest-auth/login/',
        requestData
      );

      if (response.data) {
        alert('로그인 성공!');
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        navigate('/');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.log('error:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  const { values, errors, isValid, handleChange } = useForm<LoginFormValues>({
    initialValues: initialLoginValues,
    getErrors,
  });

  const getInputTextProps = (key: keyof LoginFormValues) => {
    return {
      name: key,
      onChange: handleChange,
      regex: loginValidateConfigs[key].regex,
      minLength: loginValidateConfigs[key].minLength,
      maxLength: loginValidateConfigs[key].maxLength,
      errorMessage: errors[key],
      valu: values[key],
    };
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginPageTextInputWrapper>
        <InputText
          {...getInputTextProps('phonenumber')}
          label="전화번호"
          placeholder="01012345678"
          onChange={handleChange}
        />
        <InputText
          {...getInputTextProps('password')}
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
      </S.LoginPageTextInputWrapper>
      <Button disabled={!isValid} onClick={handleSubmitButton}>
        로그인 하기
      </Button>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;
