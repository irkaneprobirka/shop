import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [
    {
      id: 1,
      name: "Крем для лица",
      createdAt: "2024-07-08T20:31:56.114Z",
      updatedAt: "2024-07-08T20:31:56.114Z",
    },
    {
      id: 7,
      name: "Сыворотка для лица",
      createdAt: "2024-07-08T21:05:54.131Z",
      updatedAt: "2024-07-08T21:05:54.131Z",
    },
    {
      id: 8,
      name: "spf",
      createdAt: "2024-07-09T20:25:46.406Z",
      updatedAt: "2024-07-09T20:25:46.406Z",
    },
    {
      id: 9,
      name: "тонер",
      createdAt: "2024-07-09T20:45:00.165Z",
      updatedAt: "2024-07-09T20:45:00.165Z",
    },
    {
      id: 10,
      name: "тоник",
      createdAt: "2024-07-09T20:46:55.091Z",
      updatedAt: "2024-07-09T20:46:55.091Z",
    },
    {
      id: 11,
      name: "Celimax",
      createdAt: "2024-08-30T18:19:13.333Z",
      updatedAt: "2024-08-30T18:19:13.333Z",
    },
  ],
  brands: [
    {
      id: 1,
      name: "Cosrx",
      createdAt: "2024-07-08T22:39:39.930Z",
      updatedAt: "2024-07-08T22:39:39.930Z",
    },
    {
      id: 2,
      name: "Isntree",
      createdAt: "2024-07-08T22:39:49.591Z",
      updatedAt: "2024-07-08T22:39:49.591Z",
    },
    {
      id: 3,
      name: "Innisfree",
      createdAt: "2024-07-08T22:40:30.609Z",
      updatedAt: "2024-07-08T22:40:30.609Z",
    },
    {
      id: 4,
      name: "Round Lab",
      createdAt: "2024-07-09T20:47:09.053Z",
      updatedAt: "2024-07-09T20:47:09.053Z",
    },
  ],
  device: [
    {
      id: 1,
      name: "Крем с муцином улитки",
      price: 1200,
      rating: 0,
      img: "8fdcac9b-ed4d-435b-9ba9-a6b3e63b7163.jpg",
      createdAt: "2024-07-08T23:18:40.893Z",
      updatedAt: "2024-07-08T23:18:40.893Z",
      typeId: 1,
      brandId: 1,
    },
    {
      id: 5,
      name: "Hyaluronic Acid Natural Sun Cream Suncream Spf50 Pa++++ ",
      price: 1500,
      rating: 0,
      img: "802f5db8-9312-4892-8c9c-4e15937b3c4e.jpg",
      createdAt: "2024-07-09T20:28:15.776Z",
      updatedAt: "2024-07-09T20:28:15.776Z",
      typeId: 8,
      brandId: 2,
    },
    {
      id: 17,
      name: "1025 Dokdo Toner",
      price: 2700,
      rating: 0,
      img: "9dd04152-932c-4546-8b6a-c3b1fde7370e.jpg",
      createdAt: "2024-07-09T20:50:02.376Z",
      updatedAt: "2024-07-09T20:50:02.376Z",
      typeId: 9,
      brandId: 4,
    },
    {
      id: 18,
      name: "Hyaluronic Acid Aqua Gel Cream",
      price: 1600,
      rating: 0,
      img: "00198ba8-0d4e-453c-9a48-b3c97d9e826d.jpg",
      createdAt: "2024-07-09T20:53:10.301Z",
      updatedAt: "2024-07-09T20:53:10.301Z",
      typeId: 1,
      brandId: 2,
    },
  ],
};

const DeviceSlice = createSlice({
    name : 'device',
    initialState,
    reducers : {
        
    }
})
