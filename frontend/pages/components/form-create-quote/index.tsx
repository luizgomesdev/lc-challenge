import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface ICreateQuoteForm {
  fromDeparture: string;
  toDeparture: string;
  departureDate: string;
  departureReturn: string;
  quantity: number;
  transport: string;
  name: string;
}
const FormCreateQuote = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreateQuoteForm>();

  const onSubmit = (data) => console.log(data);

  return (
    <VStack as={"form"} spacing={4}>
      <HStack w="full" spacing={4}>
        <FormControl>
          <FormLabel>From Departure</FormLabel>
          <Input
            variant="flushed"
            type="text"
            focusBorderColor="purple.500"
            {...register("fromDeparture", {
              required: true,
            })}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl>
          <FormLabel>To Departure</FormLabel>
          <Input
            variant="flushed"
            type="text"
            focusBorderColor="purple.500"
            {...register("toDeparture", {
              required: true,
            })}
          />

          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl>
          <FormLabel>Departure Date</FormLabel>
          <Input
            variant="flushed"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            focusBorderColor="purple.500"
            {...register("departureDate", {
              required: true,
            })}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl>
          <FormLabel>Departure Return</FormLabel>
          <Input
            variant="flushed"
            type="date"
            focusBorderColor="purple.500"
            {...register("departureReturn", {
              required: true,
            })}
          />

          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <Input
            variant="flushed"
            type="number"
            focusBorderColor="purple.500"
            {...register("quantity", {
              required: true,
            })}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl>
          <FormLabel>Transport</FormLabel>
          <Input
            variant="flushed"
            type="text"
            focusBorderColor="purple.500"
            {...register("transport", {
              required: true,
            })}
          />

          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
      </HStack>

      <HStack w="full" alignItems="center">
        <FormControl w="50%">
          <FormLabel>Name</FormLabel>
          <Input
            variant="flushed"
            type="text"
            focusBorderColor="purple.500"
            {...register("name", {
              required: true,
            })}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <Button w="50%" type="submit" colorScheme="teal" rounded="full" h={14}>
          Create a Quote
        </Button>
      </HStack>
    </VStack>
  );
};

export default FormCreateQuote;
