import React from "react";
import { useTable } from "react-table";
import Modal from "../new_password";

function Passwords() {
  const data = React.useMemo(
    () => [
      {
        col1: "9anime.id",
        col2: "rmstan",
        col3: "net",
      },
      {
        col1: "amazon.com",
        col2: "4087099422",
        col3: "fpl",
      },
      {
        col1: "facebook.com",
        col2: "4087099422",
        col3: "hy2",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Site",
        accessor: "col1",
      },
      {
        Header: "Username",
        accessor: "col2",
      },
      {
        Header: "Password",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Modal />
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Passwords;
