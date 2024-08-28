// src/components/Teacher/TeacherList.js
import React, { useEffect, useState } from 'react';
import { getAllTeachers } from '../../api/teacherApi';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await getAllTeachers();
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Teachers List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
