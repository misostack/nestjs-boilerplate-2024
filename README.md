# NestJS Examples

- **Version**: 1.0
- **Architecture**: Domain Driven Design

## Includes

- Domain Driven Design Architecture Code Structure
- Environment Configuration
- Database Module: Migrations, Seeds
- Unit Test
- Docker

### Code structure

```md
- src
  - main.ts
  - modules
    - main : main module
    - log : log module
    - feature module: eg: user module
    - example_module:
      - example.module.ts
      - controllers: // presentation layer
        - example.controller.ts
        - example-category.controller.ts
      - dtos: // objects to exchange data between presentation layer and application layer
        - example.dtos.ts
        - example-category.dtos.ts
      - entities: // domain layer
        - example.ts
        - example-category.ts
      - repositories: // domain layer
        - example.repository.ts
        - example-category.repository.ts
      - services: // application layer
        - example.service.ts // which use example repository
  - database: database configuration, migrations, seeds
  - configuration: application's configuration
  - common : common helpers, libraries, common modules
```

### Entities

### API Requirements
