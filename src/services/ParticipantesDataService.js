import http from "../http-common";

class AwardDataService {

  getAll() {
    return http.get("/partis");
  }

  get(id) {
    return http.get(`/partis/${id}`);
  }

  create(data) {
    return http.post("/partis", data);
  }

  update(id, data) {
    return http.put(`/partis/${id}`, data);
  }

  delete(id) {
    return http.delete(`/partis/${id}`);
  }

  deleteAll() {
    return http.delete(`/partis`);
  }

  findByTitle(title) {
    return http.get(`/partis?title=${title}`);
  }
}

export default new AwardDataService();