package ec.edu.espe.services;

import java.util.List;

import ec.edu.espe.models.Editorial;

public interface ServicesEditorial {

	Editorial saveEditorial(Editorial editorial) throws Exception;

	Editorial updateEditorial(Editorial editorial) throws Exception;

	List<Editorial> getAll();

	Editorial getById(Long id);

	void deleteEditorial(Long id);
}
