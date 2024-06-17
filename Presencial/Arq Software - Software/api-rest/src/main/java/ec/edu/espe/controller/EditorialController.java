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

import ec.edu.espe.models.Editorial;
import ec.edu.espe.services.ServicesEditorial;

@RestController
@RequestMapping("/api/editorials")
public class EditorialController {

	@Autowired
	private ServicesEditorial servicesEditorial;

	@GetMapping("/")
	public List<Editorial> getAll() {
		return servicesEditorial.getAll();
	}

	@PostMapping("/")
	public Editorial saveEditorial(@RequestBody Editorial editorial) throws Exception {
		return servicesEditorial.saveEditorial(editorial);
	}

	@PutMapping("/")
	public Editorial updateEditorial(@RequestBody Editorial editorial) throws Exception {
		return servicesEditorial.updateEditorial(editorial);
	}

	@GetMapping("/{id}")
	public Editorial getById(@PathVariable Long id) {
		return servicesEditorial.getById(id);
	}

	@DeleteMapping("/{id}")
	public void deleteEditorial(@PathVariable Long id) {
		servicesEditorial.deleteEditorial(id);
	}

}
