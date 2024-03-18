package com.interswitch.onlinebookstore.validator;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.validator.annotation.ValidGenre;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.EnumUtils;

import java.util.Objects;

public class GenreValidator implements ConstraintValidator<ValidGenre, String> {

    boolean nullCheck = false;
    @Override
    public void initialize(ValidGenre constraintAnnotation) {
        nullCheck = constraintAnnotation.nullCheck();
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String genre, ConstraintValidatorContext constraintValidatorContext) {
        if (Objects.isNull(genre) && BooleanUtils.isFalse(nullCheck)) {
            return true;
        }
        return EnumUtils.getEnumList(BookEntity.Genre.class).stream().anyMatch(x -> x.name().equals(genre.toUpperCase()));
    }
}
