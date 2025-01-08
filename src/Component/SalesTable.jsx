import { useDispatch, useSelector } from "react-redux";
import { DeleteReport, UpdateReport } from "../Redux/Slice";
import './SalesTable.css'

const SalesTable = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteReport(id));
  };

  const handleUpdate = (item) => {
    dispatch(UpdateReport(item));
  };

  return (
    <>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Month</th>
            <th>Sales</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.month}</td>
              <td>{item.sales}</td>
              <td>
                <button onClick={() => handleUpdate(item)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SalesTable;
