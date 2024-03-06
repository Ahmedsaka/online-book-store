package com.interswitch.onlinebookstore.config.filters;

import com.interswitch.onlinebookstore.utilities.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class JwtTokenFilter extends OncePerRequestFilter {
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        if (Objects.isNull(authorizationHeader) || !authorizationHeader.startsWith("Bearer")){
            filterChain.doFilter(request, response);
            return;
        }

        final String token = authorizationHeader.split(" ")[1].trim();
        if (!jwtUtil.validate(token)) {
            filterChain.doFilter(request, response);
            return;
        }

        String username = jwtUtil.getUsername(token);
        UserDetails details = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken userToken = new UsernamePasswordAuthenticationToken(username, null, details.getAuthorities());
        userToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(userToken);
        filterChain.doFilter(request, response);
    }
}
