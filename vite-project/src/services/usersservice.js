import http from "../http-common";



class usersservice {
  getAll() {
    return http.get("/registerUser");
  }

  get(id) {
    return http.get(`/registerUser/${id}`);
  }

  create(data) {
    return http.post("/registerUser", data);
  }

  update(id, data) {
    return http.put(`/registerUser/${id}`, data);
  }

  delete(id) {
    return http.delete(`/registerUser/${id}`);
  }

  deleteAll() {
    return http.delete(`/registerUser`);
  }

  findByTitle(name) {
    return http.get(`/registerUser?name=${name}`);
  }
}

export default new usersservice();