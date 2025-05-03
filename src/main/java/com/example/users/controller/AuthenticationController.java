package com.example.users.controller;
import com.example.users.entites.User;
import com.example.users.dtos.LoginUserDto;
import com.example.users.dtos.RegisterUserDto;
import com.example.users.responses.LoginResponse;
import com.example.users.services.AuthenticationService;
import com.example.users.services.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
public class AuthenticationController {
    
}
