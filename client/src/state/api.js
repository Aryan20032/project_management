import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: { baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL },
  reducerPath: "api",
  tagTypes: ["Projects", "Tasks"],
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => "projects",
      providesTags: ["Projects"],
    }),
    createProject: build.mutation({
      query: (project) => ({
        url: "projects",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Projects"],
    }),
    getTasks: build.query({
      query: (projectId) => "tasks?projectid=${projectId}",
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks", id }))
          : [{ type: "Tasks" }],
    }),

    createTask: build.mutation({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: build.mutation({
      query: ({ taskId, status }) => ({
        url: "tasks",
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: "Tasks", id: taskId },
      ],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useCreateProjectMutation,
  useGetTaskQuery,
  useCreateTaskMutation,
} = api;
