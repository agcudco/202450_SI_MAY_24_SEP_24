package espe.pac.pac.service;

import java.util.List;
import java.util.Optional;

import espe.pac.pac.model.Book;

public interface BookService {

	public Book saveBook(Book book);

	public Book updateBook(Book book);

	public List<Book> listAll();

	public void deleteBook(Long id);

	public Optional<Book> getById(int id);
	
	public Book findByName(String name);	
	
	public Book findByNameIgnCase(String name);
	
	public List<Book> listarPorAnio(int anio);
	
	public List<Book> buscarPorNombre(String name);
}
