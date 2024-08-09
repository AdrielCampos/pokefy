import { auth } from '@/config/firebase';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

export const loginWithGoogle = async (): Promise<{
  data?: User;
  error?: string;
  status: number;
}> => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return { data: user, status: 200 };
  } catch (error) {
    return { error: JSON.stringify(error), status: 400 };
  }
};
