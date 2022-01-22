import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const carService = {
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data), //baseURL is located in axiosService, '/cars' is in .cars , value.data instead of value.json
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`) // by default 'delete' doesn't return any data ( the request will either be made or give an error )
}
// post put get have a second param, in which we can transfer data

// CRUD operation - Create Read Update Delete