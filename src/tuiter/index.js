import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "../tuiter/navigation-sidebar/index"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
// import WhoToFollowListItem
//     from "./who-to-follow-list/who-to-follow-list-item";
// import logo from"../images/NASA_icon.png"
function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>


                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>

                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>

    );
}
export default Tuiter