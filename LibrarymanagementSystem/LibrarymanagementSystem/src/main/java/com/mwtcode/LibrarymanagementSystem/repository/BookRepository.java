package com.mwtcode.LibrarymanagementSystem.repository;

import com.mwtcode.LibrarymanagementSystem.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
