package ec.edu.espe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.edu.espe.models.Book;
import ec.edu.espe.services.ServiceBook;

@RestController
@RequestMapping("/api/books")
public class BookController {

	@Autowired
	private ServiceBook serviceBook;
	
	@GetMapping("/")
	public List<Book> getAll(){
		return serviceBook.getAll();
	}
	
	@PostMapping("/")
	public Book saveBook(@RequestBody Book book) throws Exception {
		return serviceBook.saveBook(book);
	}
	
	@PutMapping("/")
	public Book updateBook(@RequestBody Book book) throws Exception {
		return serviceBook.saveBook(book);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable Long id) {
		serviceBook.deleteBook(id);
	}
	
	@GetMapping("/{id}")
	public Book getById(@PathVariable Long id) {
		return serviceBook.getById(id);
	}
	
	@GetMapping("/editorial/{id}")
	public List<Book> getByEditorial(@PathVariable Long id){
		return serviceBook.getByEditorialId(id);
	}
}
