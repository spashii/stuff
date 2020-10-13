import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { AuthContext } from '../../context/Auth';
import addCourse from '../../util/Course/addCourse';

const Form = () => {
  const { currentUser } = useContext(AuthContext);
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>('');

  function handleSubmit(e: any) {
    e.preventDefault();
    setCode('');
    setName('');
    e.target.reset();
    addCourse(currentUser, code, name);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="code"
          required
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
