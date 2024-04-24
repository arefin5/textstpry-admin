import NavigationLink from "./NavigationLink";

const SideBar = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Work- Section",
      path:"/work-top",
    },{
      name: "Productivity Section",
      path:"/productivity",
    },{
      name: "Reveiw Section",
      path:"/reveiw",
    } ,
    {
      name:"Featcher Section",
      path:"/featcher"
    }
  ];

  return (
    <aside style={{ backgroundColor: "#F2F2F2" }} className="w-25">
      <div className="d-flex flex-column align-items-center px-4 pt-4 ">
        <img
          src="./vite.svg"
          alt="Avatar"
          height={100}
          width={100}
          className="rounded-circle"
        />
        <div className="text-center mt-3">
          <h5 className="m-0">Md Rafiqul Islam</h5>
          <p className="text-secondary fs-6">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="m-0">
        <ul className="list-unstyled">
          {routes.map((route, idx) => (
            <NavigationLink key={idx} path={route.path}>
              {route.name}
            </NavigationLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
