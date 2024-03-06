package com.interswitch.onlinebookstore.utilities;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.experimental.UtilityClass;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Objects;

@Component
public class JwtUtil {
    private final int EXPIRES_IN_MINUTES = 60 * 60 *1000;

    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generate(String username, Integer expiryInMinutes) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuer("backendstory.com")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + (Objects.nonNull(expiryInMinutes) ? expiryInMinutes : EXPIRES_IN_MINUTES)))
                .signWith(SignatureAlgorithm.HS256, "kenjlkfbsdknvhjfjhkknlkakklgnkagnkgalkblkllnxbagnkanbkbnnkjcjjkl")
                .compact();
    }
    public boolean validate(String token) {
        return getUsername(token) != null && isExpired(token);
    }

    public String getUsername(String token) {
        Claims claims = getClaims(token);
        return claims.getSubject();
    }

    public boolean isExpired(String token) {
        Claims claims = getClaims(token);
        return claims.getExpiration().after(new Date(System.currentTimeMillis()));
    }

    private Claims getClaims(String token) {
        return Jwts.parser().setSigningKey("kenjlkfbsdknvhjfjhkknlkakklgnkagnkgalkblkllnxbagnkanbkbnnkjcjjkl").parseClaimsJws(token).getBody();
    }
}
