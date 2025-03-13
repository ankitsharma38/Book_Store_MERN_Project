import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiViewBoards,
} from "react-icons/hi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export const SideBar = () => {
  const { user } = useContext(AuthContext);

  // Check if user has a profile picture, otherwise show default icon
  const profileImage = user?.photoURL ? (
    <img
      src={user.photoURL}
      alt="User Profile"
      className="w-10 h-10 rounded-full"
    />
  ) : (
    <FaUserCircle className="w-10 h-10 text-gray-500" />
  );

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/">
        <div className="flex items-center space-x-3 p-2 -m-8 border-b">
          {profileImage}
          <span className="font-semibold">
            {user?.displayName || user?.email || "User"}
          </span>
        </div>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>

          <Sidebar.Item href="/logout" icon={FaSignOutAlt}>
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
