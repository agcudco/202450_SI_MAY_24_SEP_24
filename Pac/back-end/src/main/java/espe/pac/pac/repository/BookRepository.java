package espe.pac.pac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import espe.pac.pac.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
	
	public Book findByName(String name);
	
	//public Book findByNameIgnoringCase(String name);
	
	public List<Book> findByYear(int year);
	
	List<Book> findByNameContaining(String name);
	
	List<Book> findByNameIgnoreCase(String name);
}
