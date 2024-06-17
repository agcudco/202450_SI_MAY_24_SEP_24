package ec.edu.espe.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.edu.espe.models.Editorial;
import ec.edu.espe.repository.RepositoryEditorial;
import ec.edu.espe.services.ServicesEditorial;

@Service
public class ServicesEditorialImpl implements ServicesEditorial{

	@Autowired
	private RepositoryEditorial repositoryEditorial;
	
	@Override
	public Editorial saveEditorial(Editorial editorial) throws Exception {
		repositoryEditorial.save(editorial);
		return editorial;
	}

	@Override
	public Editorial updateEditorial(Editorial editorial) throws Exception {
		repositoryEditorial.save(editorial);
		return editorial;
	}

	@Override
	public List<Editorial> getAll() {		
		return repositoryEditorial.findAll();
	}

	@Override
	public Editorial getById(Long id) {		
		return repositoryEditorial.findById(id).orElse(null);
	}

	@Override
	public void deleteEditorial(Long id) {		
		repositoryEditorial.deleteById(id);
	}

}
