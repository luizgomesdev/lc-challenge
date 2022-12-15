import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { QuoteStatusEnum } from "../../domain/enums/quote-status.enum";
import { useGetQuotesQuery } from "../../services/quotes";

const PendingQuotesList = () => {
  const { data: quotes, isLoading } = useGetQuotesQuery({
    status: QuoteStatusEnum.PENDING,
  });

  if (!quotes) {
    return <></>;
  }

  return (
    <TableContainer>
      <Table size="sm" w='full'>
        <Thead>
          <Tr>
            <Th border="none">ID #</Th>
            <Th border="none">Name</Th>
            <Th border="none">Destination</Th>
            <Th border="none">Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {quotes.data.map((quote) => (
            <Tr key={quote.id}>
              <Td border="none">{quote.orderNumber}</Td>
              <Td border="none">{quote.customer.name}</Td>
              <Td border="none">
                {quote.toDeparture.name.toLocaleUpperCase().split(" ")[0]}
              </Td>
              <Td border="none">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(quote?.price ?? 0)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PendingQuotesList;
