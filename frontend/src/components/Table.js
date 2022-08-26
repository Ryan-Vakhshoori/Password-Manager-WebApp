import axios from "axios";
import React from "react";
import { useTable } from "react-table";

function Table(props) {
  axios.get("http://localhost:3001/passwords/get-passwords", {
    params: {
      docID: props.docID,
    },
  })
  .then(function (response) {

  })
  .catch(function (error) {

  });

  const data = React.useMemo(
    () => [
      {
        site: "9anime.id",
        username: "rmstan",
        password: "net",
      },
      {
        site: "amazon.com",
        username: "4087099422",
        password: "fpl",
      },
      {
        site: "facebook.com",
        username: "4087099422",
        password: "hy2",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Site",
        accessor: "site",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Password",
        accessor: "password",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
