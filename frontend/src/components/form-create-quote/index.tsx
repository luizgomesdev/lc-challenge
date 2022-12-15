import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { debounce } from "lodash";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useGetDeparturesQuery } from "../../services/departures";
import { useCreateQuoteMutation } from "../../services/quotes";
import { useGetTransportationsQuery } from "../../services/transportations";

interface ICreateQuoteForm {
  fromDeparture: {
    label: string;
    value: string;
  };
  toDeparture: {
    label: string;
    value: string;
  };
  departureDate: Date;
  departureReturnDate: Date;
  quantity: number;
  transport: {
    label: string;
    value: string;
  };
  name: string;
}

const FormCreateQuote = () => {
  const [searchFromDeparture, setSearchFromDeparture] = useState<string>("");
  const [searchToDeparture, setSearchToDeparture] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<ICreateQuoteForm>();

  const { data: departuresData } = useGetDeparturesQuery({
    limit: 32,
    search: searchFromDeparture || searchToDeparture,
  });

  const { data: transportsData } = useGetTransportationsQuery(undefined);

  const [createQuote, { isLoading: isLoadingCreateQuote }] =
    useCreateQuoteMutation();

  const handleDebounceFromDepartureSearch = debounce((value) => {
    setSearchFromDeparture(value);
  }, 500);

  const handleDebounceToDepartureSearch = debounce((value) => {
    setSearchToDeparture(value);
  }, 500);

  const onSubmit = async (data: ICreateQuoteForm) => {
    try {
      await createQuote({
        departureDate: data.departureDate,
        departureReturnDate: data.departureReturnDate,
        quantity: data.quantity,
        name: data.name,
        fromDepartureId: data.fromDeparture.value,
        toDepartureId: data.toDeparture.value,
        transportationId: data.transport.value,
      }).unwrap();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VStack as={"form"} spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <HStack w="full" spacing={6}>
        <Controller
          control={control}
          name="fromDeparture"
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, name },
            fieldState: { error },
          }) => (
            <FormControl bg="gray.200" p={2}>
              <FormLabel mb={0} color="gray.500">
                From
              </FormLabel>
              <Select
                variant="flushed"
                placeholder="Select option"
                focusBorderColor="gray.500"
                onChange={onChange}
                onInputChange={(value) =>
                  handleDebounceFromDepartureSearch(value)
                }
                onBlur={onBlur}
                value={value}
                name={name}
                isInvalid={!!error}
                //@ts-ignore
                options={
                  departuresData?.data?.map((d) => ({
                    label: `(${d.acronym}) ${d.name}`,
                    value: d.id,
                  })) || []
                }
              />
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="toDeparture"
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, name },
            fieldState: { error },
          }) => (
            <FormControl bg="gray.200" p={2}>
              <FormLabel mb={0} color="gray.500">
                Destination
              </FormLabel>
              <Select
                variant="flushed"
                focusBorderColor="gray.500"
                placeholder="Select option"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                onInputChange={(value) =>
                  handleDebounceToDepartureSearch(value)
                }
                isInvalid={!!error}
                //@ts-ignore
                options={
                  departuresData?.data?.map((d) => ({
                    label: `(${d.acronym}) ${d.name}`,
                    value: d.id,
                  })) || []
                }
              />
            </FormControl>
          )}
        />
      </HStack>

      <HStack w="full" spacing={6}>
        <FormControl bg="gray.200" p={2}>
          <FormLabel mb={0} color="gray.500">
            Departure Date
          </FormLabel>
          <Input
            variant="flushed"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            focusBorderColor="gray.500"
            isInvalid={!!errors.departureDate}
            {...register("departureDate", {
              required: true,
            })}
          />
        </FormControl>

        <FormControl bg="gray.200" p={2}>
          <FormLabel mb={0} color="gray.500">
            Return Date
          </FormLabel>
          <Input
            variant="flushed"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            isInvalid={!!errors.departureReturnDate}
            focusBorderColor="gray.500"
            {...register("departureReturnDate", {
              required: true,
            })}
          />
        </FormControl>
      </HStack>

      <HStack w="full" spacing={6}>
        <FormControl bg="gray.200" p={2}>
          <FormLabel mb={0} color="gray.500">
            {" "}
            People
          </FormLabel>
          <Input
            variant="flushed"
            type="number"
            placeholder="Number of people"
            defaultValue={1}
            max={10}
            focusBorderColor="gray.500"
            isInvalid={!!errors.quantity}
            {...register("quantity", {
              required: true,
              max: 10,
            })}
          />
        </FormControl>

        <Controller
          control={control}
          name="transport"
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, onBlur, value, name },
            fieldState: { error },
          }) => (
            <FormControl bg="gray.200" p={2}>
              <FormLabel mb={0} color="gray.500">
                {" "}
                Transport
              </FormLabel>
              <Select
                variant="flushed"
                focusBorderColor="gray.500"
                placeholder="Select transport"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                isInvalid={!!error}
                //@ts-ignore
                options={
                  transportsData?.data?.map((d) => ({
                    label: d.name,
                    value: d.id,
                  })) || []
                }
              />
            </FormControl>
          )}
        />
      </HStack>

      <HStack w="full" alignItems="center" spacing={6}>
        <FormControl w="50%" bg="gray.200" p={2}>
          <FormLabel mb={0} color="gray.500">
            {" "}
            Name
          </FormLabel>
          <Input
            variant="flushed"
            type="text"
            placeholder="Name"
            focusBorderColor="gray.500"
            {...register("name", {
              required: true,
            })}
          />
        </FormControl>

        <Button
          w="50%"
          type="submit"
          colorScheme="teal"
          rounded="full"
          isLoading={isLoadingCreateQuote}
          h={14}
        >
          Create a Quote
        </Button>
      </HStack>
    </VStack>
  );
};

export default FormCreateQuote;
