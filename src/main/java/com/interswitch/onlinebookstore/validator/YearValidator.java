package com.interswitch.onlinebookstore.validator;

import com.interswitch.onlinebookstore.validator.annotation.ValidYear;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.lang3.BooleanUtils;

import java.time.Year;
import java.util.Objects;

public class YearValidator implements ConstraintValidator<ValidYear, Integer> {

    boolean nullCheck = false;

    @Override
    public void initialize(ValidYear constraintAnnotation) {
        nullCheck = constraintAnnotation.nullCheck();
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Integer year, ConstraintValidatorContext constraintValidatorContext) {
        if (Objects.isNull(year) && BooleanUtils.isFalse(nullCheck)) {
            return true;
        }
        return Year.now().getValue() <= year;
    }
}
