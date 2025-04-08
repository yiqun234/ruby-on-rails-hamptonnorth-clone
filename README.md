# Ruby on Rails - Getting Started Guide

## Introduction

Ruby on Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.

## Rails Philosophy

Rails is built on two major guiding principles:

* **Don't Repeat Yourself (DRY)**: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
* **Convention Over Configuration**: Rails has opinions about the best way to do many things in a web application, and defaults to this set of conventions, rather than requiring extensive configuration.

## Prerequisites

For working with Rails, you will need:

* Ruby 3.2 or newer
* Rails 8.0.0 or newer
* A database system (SQLite comes bundled with Rails)

## Creating a New Rails Application

```bash
$ rails new your_app_name
$ cd your_app_name
```

## Directory Structure

A Rails application has a standardized structure:

```
app/           # Core application code
  controllers/ # Controller classes
  models/      # Model classes
  views/       # View templates
  assets/      # CSS, JavaScript, images
  mailers/     # Email delivery classes
  helpers/     # View helper methods
config/        # Application configuration
db/            # Database schema and migrations
public/        # Static files
test/          # Testing files
```

## Model-View-Controller Basics

Rails follows the MVC pattern:
- **Models**: Handle data and business logic
- **Views**: Handle the presentation of data
- **Controllers**: Handle incoming web requests and coordinate models and views

## Running Your Application

```bash
$ bin/rails server
```

Visit http://localhost:3000 in your browser to see your application.

## Database Operations

```bash
# Create database
$ bin/rails db:create

# Run migrations
$ bin/rails db:migrate

# Seed the database
$ bin/rails db:seed
```

## Rails Console

Access an interactive console to work with your application:

```bash
$ bin/rails console
```

## Testing

Run the test suite with:

```bash
$ bin/rails test
```

## Security Checking

Check for security vulnerabilities:

```bash
$ bin/brakeman
```

## Code Style Checking

Ensure consistent code formatting:

```bash
$ bin/rubocop
```

## Deploying to Production

Rails comes with Kamal, a deployment tool that uses Docker containers:

1. Create a Docker Hub repository
2. Configure `config/deploy.yml` with your server details
3. Deploy with `bin/kamal setup` for first deployment
4. For subsequent deployments, use `bin/kamal deploy`

## Further Learning Resources

For more information, visit:
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
- [Rails API Documentation](https://api.rubyonrails.org/)
- [Ruby Documentation](https://ruby-doc.org/)

## References

This README is based on the [Getting Started with Rails Guide](https://guides.rubyonrails.org/getting_started.html).

# Run Shell
> docker-compose up -d

# Hampton North Website Project

## Project Overview

Hampton North is an American company specializing in cybersecurity talent recruitment. This project is the source code for the company's official website, developed using the Ruby on Rails framework and deployed using Docker.

## Technology Stack

- **Backend Framework**: Ruby on Rails 8.0.2
- **Frontend Technologies**: 
  - Tailwind CSS (via CDN)
  - Swiper.js (client testimonial carousel)
- **Deployment**: Docker & Docker Compose
- **Database**: SQLite (development environment)

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Git

### Running the Project

1. Clone the project
   ```bash
   git clone https://github.com/yiqun234/web-hamptonnorth.git
   cd hamptonnorth
   ```

2. Start Docker containers
   ```bash
   docker-compose up -d
   ```

3. Access the website
   ```
   http://localhost:5002
   ```

### Common Commands

- Start services: `docker-compose up -d`
- Stop services: `docker-compose down`
- View logs: `docker-compose logs -f web`
- Enter container: `docker-compose exec web bash`
- Restart Rails: `docker-compose exec web restart`

## Project Structure
