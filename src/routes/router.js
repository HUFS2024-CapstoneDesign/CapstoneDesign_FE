import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main.js";
import MainInputInfo from "../pages/main/MainInputInfo.js";
import SignUp from "../pages/signUp/SignUp.js";
import SignUpFinish from "../pages/signUp/SignUpFinish.js";
import Login from "../pages/login/Login.js";
import SearchId from "../pages/searchId/SearchId.js";
import SearchIdfinish from "../pages/searchId/SearchIdfinish.js";
import NotFound from "../pages/error/NotFound.js";
import ChangePassword from "../pages/searchPassword/ChangePassword.js";
import Identification from "../pages/searchPassword/Identification.js";
import Mypage from "../pages/myPage/Mypage.js";
import Upload from "../pages/upLoad/Upload.js";
import DiseaseResult from "../pages/result/DiseaseResult.js";
import HosipitalRecommend from "../pages/result/HosipitalRecommend.js";
import Layout from "../pages/layout/Layout.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
  {
    path: "/",
    element: <Main />
  },
  {
    path : "/inputInfo",
    element : <MainInputInfo />
  },
  {
    path : "/signUp",
    element : <SignUp />
  },
  {
    path : "/login" ,
    element : <Login/>
  },
  {
    path : "/searchId" ,
    element : <SearchId />
  },
  {
    path : "/searchIdFinish",
    element : <SearchIdfinish />
  },
  {
    path : "/identification" ,
    element : <Identification />
  },
  {
    path : "/changePassword" ,
    element : <ChangePassword />
  },
  {
    path : "/mypage" ,
    element : <Mypage />
  },
  {
    path : "/upload" ,
    element : <Upload />
  },
  {
    path : "/diseaseResult" ,
    element : <DiseaseResult />
  },
  {
    path : "/hospitalReccomend" ,
    element : <HosipitalRecommend/>
  }
  ]},
  {
    path : "/signUpFinish" ,
    element : <SignUpFinish />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


export default router;