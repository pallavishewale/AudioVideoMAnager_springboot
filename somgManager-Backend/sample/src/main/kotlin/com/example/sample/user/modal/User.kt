package com.example.sample.user.modal

import jakarta.persistence.*
import lombok.Getter
import lombok.NoArgsConstructor
import lombok.Setter
import lombok.ToString

@Entity
@Table(name = "users")
@ToString
@Getter
@Setter
@NoArgsConstructor
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,
        var name:String,
        var email:String,
        var username:String,
        var password:String

) {

}