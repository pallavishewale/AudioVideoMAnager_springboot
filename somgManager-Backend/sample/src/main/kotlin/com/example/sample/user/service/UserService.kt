package com.example.sample.user.service

import com.example.sample.ConstStrings
import com.example.sample.exceptions.CustomExceptionMessage
import com.example.sample.user.DTO.UserLoginDataDto
import com.example.sample.user.modal.User
import com.example.sample.user.repository.UserRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.util.Optional

@Service
class UserService(private val userRepository: UserRepository) {
    fun getAllUsers(): MutableList<User> {
        return userRepository.findAll()
    }

    fun getUserById(id: Long): User {
        return if (userRepository.existsById(id)) {
            return userRepository.getById(id)
        } else throw CustomExceptionMessage(ConstStrings.NOT_EXIST)

    }

    fun loginUser(loginData: UserLoginDataDto): Optional<User> {
        val user = userRepository.findByUsernameAndPassword(loginData.username, loginData.password)
        return if (!user.isEmpty) {
            return user
        } else throw CustomExceptionMessage(ConstStrings.INVALIDE_CREDENTIALS)
    }

    fun saveUser(user: User): User {
        return if (userRepository.findByEmail(user.email).isEmpty) {
            if (userRepository.findByUsername(user.username).isEmpty) {
                return userRepository.save(user)
            } else throw CustomExceptionMessage(ConstStrings.USERNAME_ALREADY_EXIST)
        } else throw CustomExceptionMessage(ConstStrings.EMAIL_ALREADY_EXIST)

    }

    fun deleteUser(id: Long) {
        return if (userRepository.existsById(id)) {
            return userRepository.deleteById(id)
        } else throw CustomExceptionMessage(ConstStrings.NOT_EXIST)
    }

}