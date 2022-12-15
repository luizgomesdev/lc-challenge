import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuote } from "../domain/entities/quote.entity";
import { QuoteStatusEnum } from "../domain/enums/quote-status.enum";

type CreateQuoteDTO = {
  fromDepartureId: string;
  toDepartureId: string;
  departureDate: Date;
  departureReturnDate: Date;
  transportationId: string;
  name: string;
  quantity: number;
};

type GetQuoteParams = {
  page?: number;
  limit?: number;
  status?: QuoteStatusEnum;
};

type GetQuotesResponse = {
  data: IQuote[];
  total: number;
};
export const quoteApi = createApi({
  reducerPath: "quoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  tagTypes: ["Quote"],
  endpoints: (builder) => ({
    createQuote: builder.mutation<CreateQuoteDTO, CreateQuoteDTO>({
      invalidatesTags: [{ type: "Quote", id: "LIST" }],
      query: (body) => ({
        url: "/quotes",
        method: "POST",
        body,
      }),
    }),

    getQuotes: builder.query<GetQuotesResponse, GetQuoteParams>({
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Quote" as const, id })),
              { type: "Quote", id: "LIST" },
            ]
          : [{ type: "Quote", id: "LIST" }],

      query: (params) => ({
        url: "/quotes",
        method: "GET",
        params,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateQuoteMutation, useGetQuotesQuery } = quoteApi;
