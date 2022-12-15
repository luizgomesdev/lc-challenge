import {
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { MdChat } from "react-icons/md";
import { ICustomer } from "../../domain/entities/customer.entity";

const TeamChatList = () => {
  const leads: Pick<ICustomer, "name">[] = [
    { name: "Erma Raynor" },
    { name: "Donna Reinger" },
    { name: "Kristopher Kuvalis" },
    { name: "Mr. Sam Lockman" },
  ];

  return (
    <VStack spacing={6}>
      {leads.map((lead, index) => (
        <HStack key={index} w="full">
          <HStack w="full">
            <Avatar
              size="lg"
              name={lead.name}
              src={faker.image.avatar()}
              borderRadius={8}
            >
              <AvatarBadge boxSize="6" bg="green.500" top="-4" />
            </Avatar>
            <VStack w="full" spacing={0} alignItems="start">
              <HStack w="full" justifyContent="space-between">
                <Heading color="gray.600" size="sm">
                  {lead.name}
                </Heading>
              </HStack>
              <Text color="gray.500"> Development </Text>
            </VStack>
          </HStack>
          <Icon as={MdChat} boxSize={8} color="teal.500" />
        </HStack>
      ))}
    </VStack>
  );
};

export default TeamChatList;
