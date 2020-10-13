import { User } from 'firebase';
import firebase, { db } from '../../Firebase';

const updateUserBlockTimeStamp = (user: User) => {
  db.collection('userBlocks')
    .doc(user.uid)
    .set(
      {
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        displayName: user.displayName,
      },
      { merge: true }
    )
    .then(() => console.log(`updated @ userBlock(${user.uid})`))
    .catch((error) => console.error(error));
};

export default updateUserBlockTimeStamp;
