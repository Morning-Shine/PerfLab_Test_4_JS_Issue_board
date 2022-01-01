import { configureStore } from "@reduxjs/toolkit";
import tasksHandler from "../features/lists/tasksHandlerSlice";


export default configureStore({
  reducer: {
    tasks: tasksHandler
  }
});
