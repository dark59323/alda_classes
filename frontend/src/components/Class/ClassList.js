// src/components/Class/ClassList.js
import React, { useEffect, useState } from 'react';
import { getClasses } from '../../api/classApi';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses();
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Classes List</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>{cls.name} - {cls.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
