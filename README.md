# Docker Volumes – Persistent Data Storage

## 📌 Overview
This folder contains my learning and practice of Docker Volumes, focusing on understanding how Docker manages persistent data and shares files between the host machine and containers.

## 🐳 What are Docker Volumes?
Docker Volumes are used to persist data generated and used by Docker containers. They allow data to remain available even after a container is stopped or removed.

## 📚 Concepts Covered

- **Host Path:** The location of a directory on the host machine (your computer).
- **Container Path:** The location of a directory inside the Docker container.
- **Volume Mapping:** Connecting a host directory to a container directory.
- **Data Persistence:** Retaining data even after a container is deleted.

## 🔄 Host Path vs Container Path

| Host Path | Container Path |
|---|---|
| Exists on the host machine | Exists inside the container |
| Example: `C:\Users\Anu\mysql-data` | Example: `/var/lib/mysql` |
| Stores data on the host | Provides access to data inside the container |

## 💡 Example

```bash
docker run -d \
  --name mysql-container \
  -v C:/Users/Anu/mysql-data:/var/lib/mysql \
  mysql:8
```

In this example:
- `C:/Users/Anu/mysql-data` is the Host Path.
- `/var/lib/mysql` is the Container Path.
- MySQL database files are persisted on the host machine.

## 🎯 Why Docker Volumes?

- Prevent data loss when containers are removed.
- Share data between the host and containers.
- Maintain persistent application data.
- Separate data storage from container lifecycle.

## 🛠️ Technologies Used
- Docker
- Docker CLI
- MySQL

## 📖 Learning Outcome

Understood how Docker volumes work, how host and container paths are mapped, and how persistent storage helps manage containerized applications.

---

*This folder is part of my hands-on learning journey in Docker and containerization.*
