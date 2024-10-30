import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Projects", "Tasks", "Users", "Teams"],
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
      query: ({ projectId }) => `tasks?projectId=${projectId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks", id }))
          : [{ type: "Tasks" }],
    }),

    getTasksByUser: build.query({
      query: (userId) => `tasks/user/${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks", id }))
          : [{ type: "Tasks", id: userId }],
    }),

    createTask: build.mutation({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTaskStatus: build.mutation({
      query: ({ taskId, status }) => ({
        url: `tasks/${taskId}/status?taskId=${taskId}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: "Tasks", id: taskId },
      ],
    }),

    getUsers: build.query({
      query: () => "users",
      providesTags: ["Users"],
    }),

    getTeams: build.query({
      query: () => "teams",
      providesTags: ["Teams"],
    }),
    search: build.query({
      query: (query) => `search?query=${query}`,
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskStatusMutation,
  useSearchQuery,
  useGetUsersQuery,
  useGetTeamsQuery,
  useGetTasksByUserQuery,
} = api;

export const Status = {
  ToDo: "ToDo",
  WorkInProgress: "WorkInProgress",
  UnderReview: "UnderReview",
  Completed: "Completed",
};

export const Priority = {
  Urgent: "Urgent",
  High: "High",
  Medium: "Medium",
  Low: "Low",
  Backlog: "Backlog",
};
