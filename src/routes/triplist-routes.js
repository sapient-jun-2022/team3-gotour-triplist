import { addTripList, getAllTripList } from "../controllers/triplist-controller";

const routes = (app) =>{

    app.route("/triplist")
        .get(getAllTripList)
        .post(addTripList);

}

export default routes;