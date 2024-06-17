package ec.edu.espe.services;

import java.util.List;

import ec.edu.espe.models.Book;

public interface ServiceBook {

	public Book saveBook(Book book) throws Exception;
	
	public Book updateBook(Book book) throws Exception;
	
	public List<Book> getAll();
	
	public Book getById(Long id);
	
	public void deleteBook(Long id);
	
	List<Book> getByEditorialId(Long editorialId);
}

