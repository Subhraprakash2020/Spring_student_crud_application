package com.example.student.service;
import java.util.List;

import com.example.student.entity.Student;

public interface StudentService {
    Student createStudent(Student student);
    Student getStudentById(Long studentId);
    List<Student> getAllStudent();
    Student updateStudent(Student student);
    void deleteStudent(Long studentId);
}
