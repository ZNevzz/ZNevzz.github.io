# Shopping App


### profile
- /v1/shopping/customer/78945678

### history of orders
- /v1/shopping/customer/78945678/orders

### search specific order by text
- /v1/shopping/customer/78945678/orders?search=%url-encoded-string%

### search specific order by text with pagination
- /v1/shopping/customer/78945678/orders?search=%url-encoded-string%&limit=10&offset=0

- /v1/shopping/customer/78945678/orders?search=%url-encoded-string% => { results: [], next: http-link, previous: http-link }


## References
- https://www.youtube.com/watch?v=MbslvX0AMVE
- https://nvoulgaris.com/designing-a-restful-shopping-cart/

