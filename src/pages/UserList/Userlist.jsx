import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { rows } from "../../dummyData";
import "./Userlist.css";



const Userlist = () => {
    const [data, setData] = useState(rows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

  const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
              return (
                  <div className="userListUser">
                      <img
                          className="userListImg"
                          src={params.row.avatar}
                          alt="user"
                      />
                      {params.row.username}
                  </div>
              );
          },
      },
      {
          field: "email",
          headerName: "Email",
          width: 200,
          editable: true,
      },
      {
          field: "status",
          headerName: "Status",
          width: 120,
          editable: true,
      },
      {
          field: "transaction",
          headerName: "Transaction Volume",
          width: 160,
      },
      {
          field: "action",
          headerName: "Action",
          width: 160,
          renderCell: (params) => {
              return (
                  <>
                      <Link to={"/user/" + params.row.id}>
                          <button className="userListEdit">Edit</button>
                      </Link>
                      <DeleteOutline
                          onClick={() => handleDelete(params.row.id)}
                          className="userListDelete"
                      />
                  </>
              );
          },
      },
  ];
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default Userlist;
