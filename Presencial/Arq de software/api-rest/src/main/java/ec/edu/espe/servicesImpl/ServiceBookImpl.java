package ec.edu.espe.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.edu.espe.models.Book;
import ec.edu.espe.repository.RepositoryBook;
import ec.edu.espe.services.ServiceBook;

@Service
public class ServiceBookImpl implements ServiceBook {

	@Autowired
	private RepositoryBook repositoryBook;

	@Override
	public Book saveBook(Book book) throws Exception {
		repositoryBook.save(book);
		return book;
	}

	@Override
	public Book updateBook(Book book) throws Exception {
		repositoryBook.save(book);
		return book;
	}

	@Override
	public List<Book> getAll() {
		List<Book> books = repositoryBook.findAll();
		return books;
	}

	@Override
	public Book getById(Long id) {
		return repositoryBook.findById(id).orElse(null);
	}

	@Override
	public void deleteBook(Long id) {
		repositoryBook.deleteById(id);

	}

	@Override
	public List<Book> getByEditorialId(Long editorialId) {		
		return repositoryBook.findByEditorialId(editorialId);
	}

}
