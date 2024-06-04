package ec.edu.espe.webservices.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import ec.edu.espe.model.Producto;
import ec.edu.espe.webservices.ProductService;
import jakarta.jws.WebService;

@WebService(endpointInterface = "ec.edu.espe.webservices.ProductService")
public class ProductServicesImpl implements ProductService {

	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");

	@Override
	public Producto getById(int id) {
		EntityManager em = emf.createEntityManager();
		Producto producto = em.find(Producto.class, id);
		em.close();
		return producto;
	}

	@Override
	public void saveProdct(Producto producto) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		em.persist(producto);
		em.getTransaction().commit();
		em.close();
	}

	@Override
	public List<Producto> getAllProducts() {
		EntityManager em = emf.createEntityManager();
		TypedQuery<Producto> query = em.createQuery("SELECT e FROM Producto e", Producto.class);
		List<Producto> entities = query.getResultList();
		em.close();
		return entities;
	}

}
