import { addTripList, getAllTripList ,deleteListByName } from "../controllers/triplist-controller";

const routes = (app) =>{

    app.route("/triplist")
        .get(getAllTripList)
        .post(addTripList);

    app.route("/triplist/:destName")
        .delete(deleteListByName);

}

export default routes;


