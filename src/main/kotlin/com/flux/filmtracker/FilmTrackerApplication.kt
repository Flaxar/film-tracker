package com.flux.filmtracker

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class FilmTrackerApplication

fun main(args: Array<String>) {
    runApplication<FilmTrackerApplication>(*args)
}
