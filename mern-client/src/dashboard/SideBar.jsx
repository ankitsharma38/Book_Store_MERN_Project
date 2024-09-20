import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {  HiArrowSmLeft, HiArrowSmRight,  HiChartPie,  HiInbox,  HiOutlineCloudUpload,  HiShoppingBag,  HiTable,  HiUser,  HiViewBoards,} from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

import userImg from '../assets/me2.png'



export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={userImg} imgAlt="ME">
        Home 
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={IoIosLogIn }>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="logout" icon={FaSignOutAlt}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
