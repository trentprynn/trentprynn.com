FROM caddy:2.11.7-alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY ./src /var/www/html

ENV PORT=80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
