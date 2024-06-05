package ec.edu.espe.webservices.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import ec.edu.espe.model.Categoria;
import ec.edu.espe.webservices.CategoryService;
import jakarta.jws.WebService;
import jakarta.xml.ws.ServiceMode;

@WebService(endpointInterface = "ec.edu.espe.webservices.CategoryService")
public class CategoriaServiceImpl implements CategoryService{

	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");

    @Override
    public Categoria getById(int id) {
        EntityManager em = emf.createEntityManager();
        Categoria categoria = em.find(Categoria.class, id);
        em.close();
        return categoria;
    }

    @Override
    public void saveCategoria(Categoria categoria) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        if (categoria.getId() == 0) {
            em.persist(categoria);
        } else {
            em.merge(categoria);
        }
        em.getTransaction().commit();
        em.close();
    }

    @Override
    public List<Categoria> getAllCategorias() {
        EntityManager em = emf.createEntityManager();
        TypedQuery<Categoria> query = em.createQuery("SELECT c FROM Categoria c", Categoria.class);
        List<Categoria> categorias = query.getResultList();
        em.close();
        return categorias;
    }

    @Override
    public void deleteById(int id) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Categoria categoria = em.find(Categoria.class, id);
        if (categoria != null) {
            em.remove(categoria);
        }
        em.getTransaction().commit();
        em.close();
    }

}
