package com.interswitch.onlinebookstore.validator.annotation;

import com.interswitch.onlinebookstore.validator.YearValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({FIELD})
@Retention(RUNTIME)
@Constraint(validatedBy = YearValidator.class)
@Documented
public @interface ValidYear {
    String message() default "{invalid.year}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    boolean nullCheck() default false;
}
