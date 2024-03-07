package com.interswitch.onlinebookstore.user.repository;

import com.interswitch.onlinebookstore.user.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    UserEntity findByUsername(String usernameOrEmail);
}
