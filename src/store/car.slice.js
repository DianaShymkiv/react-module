import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{rejectWithValue})=>{
        try {
           const cars = await carService.getAll();
            return cars; // дані йдуть в extraReducers
        }catch (e) {
            return rejectWithValue(e.message);//  запишеться в [getAllCars.rejected] в action
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data},{dispatch})=>{
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data:newCar}))
        }catch (e) {
            console.log(e);
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch})=>{
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status:null,
        error:null
        // це все - state в pending
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getAllCars.pending]:(state, action) => {
            // запит

            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]:(state, action) => {
            // дані прийшли
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]:(state, action) => {
            //коли бек відповів помилкою
            state.status = 'rejected';
            state.error = action.payload;
        },

    }
})


export const carReducer = carSlice.reducer;
export const {addCar, deleteCar} = carSlice.actions;