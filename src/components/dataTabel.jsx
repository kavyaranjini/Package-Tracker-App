import React from "react";
import TaskPage from "../components";

export default function Datatable({ data }) {
  const itemArray = data.map((item) => (
    <TaskPage key={item.id} item={item}></TaskPage>
  ));

  return (
    <div>
      <h1>Task Page</h1>
      {data.length > 0 ? <u>{itemsArray}</u> : <p>no task</p>}
    </div>
  );
}

/* import React from "react";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <tabel cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <body>
        {data.map((row) => (
          <tr>
            {columns.map((columns) => (
              <td>{row[columns]}</td>
            ))}
          </tr>
        ))}
      </body>
    </tabel>
  );
}*/
