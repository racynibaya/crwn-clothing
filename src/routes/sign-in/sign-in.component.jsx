import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import Button from '../../components/button/button.component';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async function () {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>

      <Button buttonType='google' onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
