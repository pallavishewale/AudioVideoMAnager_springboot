package com.example.sample.songs.service

import com.example.sample.ConstStrings
import com.example.sample.exceptions.CustomExceptionMessage
import com.example.sample.songs.modal.Song
import com.example.sample.songs.repository.SongRepository
import org.springframework.stereotype.Service

@Service
class SongsService(private val songRepository: SongRepository) {

    fun getAllSongsByType(type:String):MutableList<Song> {
        return songRepository.findByType(type)
    }

    fun getSongById(id: Long): Song {
        return if (songRepository.existsById(id)) {
            return songRepository.getById(id)
        } else throw CustomExceptionMessage(ConstStrings.NOT_EXIST)

    }

    fun saveSong(song: Song): Song {
        return songRepository.save(song)
    }
    fun deleteSong(id: Long) {
        return if (songRepository.existsById(id)) {
            return songRepository.deleteById(id)
        } else throw CustomExceptionMessage(ConstStrings.NOT_EXIST)
    }
}