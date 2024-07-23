package espe.pac.pac.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import espe.pac.pac.model.Author;
import espe.pac.pac.repository.AuthorRepository;
import espe.pac.pac.service.AuthorService;

@Service
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	private AuthorRepository repository;

	@Override
	public List<Author> getAll() {
		return repository.findAll();
	}

}
