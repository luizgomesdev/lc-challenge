import {
  Avatar,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { ICustomer } from "../../domain/entities/customer.entity";
const NewLeadsList = () => {
  const leads: Pick<ICustomer, "name">[] = [
    { name: "Patrick Dare II" },
    { name: "Clinton DuBuque" },
    { name: "Ira Rice" },
    { name: "Ed Senger" },
  ];

  return (
    <VStack spacing={6}>
      {leads.map((lead, index) => (
        <HStack key={index} w="full">
          <HStack w="full">
            <Avatar size="lg" name={lead.name} src={faker.image.avatar()} />
            <VStack w="full" spacing={0} alignItems="start">
              <HStack w="full" justifyContent="space-between">
                <Heading color="gray.600" size="sm">
                  {lead.name}
                </Heading>
                <Text color="gray.500"> 00:00 PM </Text>
              </HStack>
              <Text color="gray.500"> Hey, I am want to place my package </Text>
            </VStack>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default NewLeadsList;
