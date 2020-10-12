import { firebaseConfig } from './config';

import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);
console.log("firebase initialized")

export default firebase;