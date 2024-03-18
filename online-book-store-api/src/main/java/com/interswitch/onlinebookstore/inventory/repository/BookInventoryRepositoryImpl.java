package com.interswitch.onlinebookstore.inventory.repository;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository
@RequiredArgsConstructor
public class BookInventoryRepositoryImpl implements CustomBookInventoryRepository {

    private final EntityManager em;
    @Override
    public Page<BookEntity> search(SearchRequest searchRequest) {

        CriteriaBuilder builder = em.getCriteriaBuilder();

        CriteriaQuery<Long> countQuery = builder.createQuery(Long.class);
        Root<BookEntity> countRoot = countQuery.from(BookEntity.class);
        countQuery.select(builder.count(countRoot));
        Long totalElements = em.createQuery(countQuery).getSingleResult();


        CriteriaBuilder dataQuery = em.getCriteriaBuilder();
        CriteriaQuery<BookEntity> cq = builder.createQuery(BookEntity.class);
        Root<BookEntity> book = cq.from(BookEntity.class);
        List<Predicate> predicates = new ArrayList<>();

        Pageable pageable = PageRequest.of(searchRequest.getPageNumber(), searchRequest.getPageSize());


        if (Objects.nonNull(searchRequest.getAuthor())) {
            predicates.add(dataQuery.equal(book.get("author"), searchRequest.getAuthor()));
        }
        if (Objects.nonNull(searchRequest.getTitle())) {
            predicates.add(dataQuery.like(book.get("title"), "%" + searchRequest.getTitle() + "%"));
        }
        if (Objects.nonNull(searchRequest.getGenre())) {
            predicates.add(dataQuery.like(book.get("genre"), "%" + BookEntity.Genre.valueOf(searchRequest.getGenre().toUpperCase()).name() + "%"));
        }
        if (Objects.nonNull(searchRequest.getYearOfPublication())) {
            predicates.add(dataQuery.like(book.get("yearOfPublication"), "%" + searchRequest.getYearOfPublication() + "%"));
        }
        cq.where(predicates.toArray(new Predicate[0]));

        return new PageImpl<>(em.createQuery(cq).getResultList(), pageable, totalElements);
    }
}