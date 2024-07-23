package espe.pac.pac.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import espe.pac.pac.model.Book;
import espe.pac.pac.service.BookService;

@RestController
@RequestMapping("/book") /// localhost:8080/book
public class BookController {

	@Autowired
	private BookService serviceBook;
	
	private static final Logger logger = LoggerFactory.getLogger(BookController.class);

	@GetMapping("/") /// localhost:8080/book/
	public List<Book> getAllBooks() {
		return serviceBook.listAll();
	}

	@PostMapping("/")
	public ResponseEntity<Book> saveBook(@RequestBody Book book) throws Exception {
		Book bookCreated = serviceBook.saveBook(book);
		return new ResponseEntity<>(bookCreated, HttpStatus.CREATED);
	}

	@PutMapping("/")
	public ResponseEntity<Book> updateBook(@RequestBody Book book) throws Exception {
		Book bookCreated = serviceBook.saveBook(book);
		return new ResponseEntity<>(bookCreated, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}") /// localhost:8080/book/1
	public void deleteBook(@PathVariable Long id) {
		serviceBook.deleteBook(id);
	}

	@GetMapping("/{id}") 
	public Optional<Book> getById(@PathVariable int id) {
		return serviceBook.getById(id);
	}
	

	@GetMapping("/anio/")
	public List<Book> listarPorAnio(@RequestParam int anio) {
		return serviceBook.listarPorAnio(anio);
	}

	@GetMapping("/name/")
	public List<Book> buscarLibrosPorNombre(@RequestParam String nombre) {
		logger.info("libro de entrada: "+nombre);
		return serviceBook.buscarPorNombre(nombre);
	}
}
