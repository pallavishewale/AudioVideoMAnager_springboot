package com.example.sample.songs.modal

import jakarta.persistence.*

@Entity
@Table(name = "songs")
class Song(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long?=null,
        var title:String,
        var artist:String,
        var genre:String,
        var duration: String,  //time in min and sec
        var year:Int,
        var language:String,
        var type:String,
        @Lob
        var image: ByteArray, // Store as byte array (BLOB) for image files
        @Lob
        var file: ByteArray, // Store as byte array (BLOB) for audio/video files


        @JoinColumn(name = "user_id") // This specifies the foreign key column in song
        var user_id: Long
){

}