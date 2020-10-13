import { User } from 'firebase';
import firebase, { db } from '../../Firebase';

function addCourse(user: User, code: string, name: string) {
  db.collection('userBlocks')
    .doc(user.uid)
    .collection('courses')
    .add({
      code: code,
      name: name,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => console.log(`added course @ userBlock(${user.uid}).courses`))
    .catch((error) => console.error(error));
}

export default addCourse;
