import http from "../http-common";

class AwardDataService {

  getAll() {
    return http.get("/awards");
  }

  get(id) {
    return http.get(`/awards/${id}`);
  }

  create(data) {
    return http.post("/awards", data);
  }

  update(id, data) {
    return http.put(`/awards/${id}`, data);
  }

  delete(id) {
    return http.delete(`/awards/${id}`);
  }

  deleteAll() {
    return http.delete(`/awards`);
  }

  findByTitle(title) {
    return http.get(`/awards?title=${title}`);
  }
}

export default new AwardDataService();