package com.example.sample.songs.repository

import com.example.sample.songs.modal.Song
import com.example.sample.user.modal.User
import jakarta.transaction.Transactional
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface SongRepository:JpaRepository<Song,Long> {
    @Transactional
    fun findByType(type:String):MutableList<Song>
}