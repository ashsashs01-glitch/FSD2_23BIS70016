## Experiment No. 9 - Implement authentication using JWT

### Project Structure

```bash
Experiment9/
│
├── venv/                     # Virtual environment (do not push to GitHub)
│
├── app.py                    # Main Flask app
│
│
├── README.md                 # Documentation

```

### Technologies Used

- Python
- Flask-jwt-extended
- Flask
- Postman
- Render (Cloud Deployment)
- Virtual Environment (venv)

### Deployment Base URL --> [Render Link](https://two3bis70027-experiment9-fsd2.onrender.com)



## API Endpoints Summary
| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /login   | Baisc Authentication Login |
| POST   | /token   | Generate JWT token |
| GET    | /protected | Access protected route (JWT required) |



## Learning Outcome
- Understood the concept of authentication and authorization in web applications.
- Implemented Basic Authentication using Flask.
- Generated and verified JWT tokens for secure API access.
- Protected API routes using token-based authentication.
- Tested secured endpoints using Postman with Authorization headers.

