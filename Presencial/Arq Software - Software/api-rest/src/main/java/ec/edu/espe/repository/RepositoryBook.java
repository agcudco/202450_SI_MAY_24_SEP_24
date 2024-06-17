package ec.edu.espe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.edu.espe.models.Book;

public interface RepositoryBook extends JpaRepository<Book, Long>{

	List<Book> findByEditorialId(Long editorialId);
}
