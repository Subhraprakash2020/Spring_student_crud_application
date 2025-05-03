package com.example.users.repository;
import com.example.users.entites.User;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
    Optional<User> findByEmail(String email);  
}