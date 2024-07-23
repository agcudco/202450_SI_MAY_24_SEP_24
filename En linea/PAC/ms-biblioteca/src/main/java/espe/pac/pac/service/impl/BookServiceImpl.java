package espe.pac.pac.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import espe.pac.pac.model.Book;
import espe.pac.pac.repository.BookRepository;
import espe.pac.pac.service.BookService;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public List<Book> listAll() {		
		return bookRepository.findAll();
	}

	@Override
	public void deleteBook(Long id) {
		bookRepository.deleteById((long) id);
		
	}

	@Override
	public Optional<Book> getById(int id) {
		return bookRepository.findById((long) id);
	}

	@Override
	public Book findByName(String name) {		
		return bookRepository.findByName(name);		
	}

	@Override
	public Book findByNameIgnCase(String name) {
		return null;//bookRepository.findByNameIgnoringCase(name);
	}

	@Override
	public List<Book> listarPorAnio(int anio) {
		
		return bookRepository.findByYear(anio);
	}

	@Override
	public List<Book> buscarPorNombre(String name) {
		return bookRepository.findByNameIgnoreCase(name);
	}

}
