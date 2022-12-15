import { ITransportation } from "./../domain/entities/transportation.entity";
import { IDeparture } from "../domain/entities/departure.entity";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetParams = {
  page?: number;
  limit?: number;
  search?: string;
};

type GetTransportationsResponse = {
  data: ITransportation[];
  total: number;
};

export const transportationApi = createApi({
  reducerPath: "transportationApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  endpoints: (builder) => ({
    getTransportations: builder.query<
      GetTransportationsResponse,
      GetParams | undefined
    >({
      query: (params) => ({
        url: "/transportations",
        params,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTransportationsQuery } = transportationApi;
