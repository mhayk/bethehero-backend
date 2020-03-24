## Knex

### Command to create a migration
```
$ yarn knex migrate:make create_ongs
$ yarn knex migrate:make create_incidents
```

### Command to execute the migrations
```
$ yarn knex migrate:latest
```

### Command to rollback the last migration
```
$ yarn knex migrate:rollback
```

### Command to list all migrations files with status
```
$ yarn knex migrate:status|migrate:list
```