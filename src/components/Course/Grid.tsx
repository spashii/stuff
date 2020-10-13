import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Auth';
import { db } from '../../Firebase';

const Grid = () => {
  const { currentUser } = useContext(AuthContext);
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('userBlocks')
      .doc(currentUser.uid)
      .collection('courses')
      .onSnapshot((snapshot) => {
        let courses: any = [];
        snapshot.forEach((doc) => {
          courses.push(doc.data());
        });
        setCourses(courses);
      });
    return () => unsubscribe();
  }, [currentUser]);

  console.log(courses);

  return (
    <div>
      <ul>
        {courses.length > 1 &&
          courses.map(
            (course: { code: React.ReactNode; name: React.ReactNode }) => (
              <li key={`${course.code}`}>
                {course.code} - {course.name}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Grid;
