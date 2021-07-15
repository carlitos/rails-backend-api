# 3Pillar Global RoR Dev - Evaluation

## Documentation

Include basic testing and documentation.


```
docker-compose build
```

```
docker-compose up
```

Run the db setup
```
docker-compose exec web rake db:create

```

Run the migration
```
docker-compose exec web rake db:migrate

```

The solution must be containerized with docker.



