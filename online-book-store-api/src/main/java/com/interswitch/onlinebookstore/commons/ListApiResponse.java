package com.interswitch.onlinebookstore.commons;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListApiResponse<T> {
    private List<T> content;
    private Integer offset;
    private Integer pageNumber;
    private Integer totalNumber;
}
