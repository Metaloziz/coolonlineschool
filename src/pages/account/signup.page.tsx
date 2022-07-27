import { AuthGuard } from '@app/common/AuthGuard';
import BlankLayout from '@components/modules/layout/blank/BlankLayout';
import { Routes } from '@constants/Routes';

const SignUp = () => (
  <>
    <div>SignUp</div>
  </>
);

export default SignUp;

SignUp.layout = BlankLayout;

SignUp.guard = {
  disallowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
