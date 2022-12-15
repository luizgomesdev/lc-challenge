import { IDeparture } from "./../domain/entities/departure.entity";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetParams = {
  page?: number;
  limit?: number;
  search?: string;
};

type GetDeparturesResponse = {
  data: IDeparture[];
  total: number;
};

export const departureApi = createApi({
  reducerPath: "departureApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  endpoints: (builder) => ({
    getDepartures: builder.query<GetDeparturesResponse, GetParams | undefined>({
      query: (params) => ({
        url: "/departures",
        params,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDeparturesQuery } = departureApi;
