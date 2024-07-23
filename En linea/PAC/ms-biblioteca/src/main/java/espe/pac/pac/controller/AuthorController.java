package espe.pac.pac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import espe.pac.pac.model.Author;
import espe.pac.pac.service.AuthorService;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "*")
public class AuthorController {

	@Autowired
	private AuthorService service;

	@GetMapping("/")
	public List<Author> getAll() {
		return service.getAll();
	}
}
