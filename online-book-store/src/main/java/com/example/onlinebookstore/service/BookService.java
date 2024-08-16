package com.example.onlinebookstore.service;

import java.util.List;

import org.hibernate.query.Page;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;

import com.example.onlinebookstore.entity.Book;
import com.example.onlinebookstore.entity.BookPaging;
import com.example.onlinebookstore.entity.Category;



public interface BookService {
	Book addBook(Book book);
    List<Book> getAllBooks();
	Book getBookByBookId(long bookId);
	Book updateBook(Book book, long bookId);
	void deleteBook(long bookId);
	List<Book> findByCategory(Category category);
	BookPaging findByCategory(Category category, Integer pageNo, Integer pageSize);
	BookPaging getAllBooks(Integer pageNo, Integer pageSize);
	List<Book> findByMrpPrice(double mrpPrice);
	BookPaging findByBookname(String keyword, Integer pageNo, Integer pageSize);
}
