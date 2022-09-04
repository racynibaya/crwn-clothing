import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthContainer } from './authentication.styles';

const Authentication = () => {
  const logGoogleUser = async function () {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };
  console.log(logGoogleUser);

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
