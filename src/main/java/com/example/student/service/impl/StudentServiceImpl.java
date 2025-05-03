package com.example.student.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;
import com.example.student.service.StudentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    @Override
    public Student createStudent(Student student){
        return studentRepository.save(student);
    }

    @Override
    public Student getStudentById(Long studentId){
        Optional<Student> optionalStudent = studentRepository.findById(studentId);
        return optionalStudent.get();
    }

    @Override
    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    @Override
    public Student updateStudent(Student student){
        Student existiStudent = studentRepository.findById(student.getId()).get();
        existiStudent.setName(student.getName());
        existiStudent.setGender(student.getGender());
        existiStudent.setFees(student.getFees());
        existiStudent.setParentsName(student.getParentsName());
        Student updateStudent = studentRepository.save(existiStudent);
        return updateStudent;
    }

    @Override
    public void deleteStudent(Long studentId){
        studentRepository.deleteById(studentId);
    }
}
