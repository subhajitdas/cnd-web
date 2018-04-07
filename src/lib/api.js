import Axios from 'axios';

export default Axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzZGFzIiwibmFtZSI6IlN1Ymhhaml0IERhcyIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoib25lLWlkZW50aXR5IiwiYXVkIjoiY25kLWNvcmUifQ.4z5TU-Zy_Tm0OTHoDSErCFtzfiAZJVYuxgjriJUQIzM'
    }
})