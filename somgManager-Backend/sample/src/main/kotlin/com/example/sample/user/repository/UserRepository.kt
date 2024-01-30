package com.example.sample.user.repository

import com.example.sample.user.modal.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*
@Repository
interface UserRepository: JpaRepository<User, Long> {
    fun findByEmail(email:String): Optional<User>
    fun findByUsername(username:String):Optional<User>
    fun findByUsernameAndPassword(username:String,password:String):Optional<User>
}