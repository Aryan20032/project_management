import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import React from "react";
import Header from "../../../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

const Table = ({ id, setIsModalNewTaskOpen }) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {params.value}
        </span>
      ),
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 75,
    },
    {
      field: "tags",
      headerName: "Tags",
      width: 130,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 130,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 130,
    },
    {
      field: "author",
      headerName: "Author",
      width: 130,
      renderCell: (params) => params.value?.author || "Unknown",
    },
    {
      field: "assignee",
      headerName: "Assignee",
      width: 130,
      renderCell: (params) => params.value?.assignee || "Unassigned",
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occured during Fetching tasks</div>;
  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Table"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <DataGrid
        rows={tasks || []}
        columns={columns}
        className={dataGridClassNames}
        sx={dataGridSxStyles(isDarkMode)}
      />
    </div>
  );
};

export default Table;
