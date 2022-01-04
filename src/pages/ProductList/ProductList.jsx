import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
  };

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "usproducter",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img
                        className="productListImg"
                        src={params.row.img}
                        alt="product"
                    />
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "stock",
        headerName: "Stock",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        editable: true,
    },
    {
        field: "price",
        headerName: "Price",
        width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell: (params) => {
            return (
                <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        onClick={() => handleDelete(params.row.id)}
                        className="productListDelete"
                    />
                </>
            );
        },
    },
];

    return (
        <div className="productlist">
            {" "}
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

export default ProductList;
