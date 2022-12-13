import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { MdZoomOutMap } from "react-icons/md";
import React from "react";
import { IconType } from "react-icons";

interface IActionCallBack {
  icon: IconType;
  onClick: () => void;
}

interface IProps {
  children: React.ReactNode;
  actions?: IActionCallBack[];
  title: string;
  icon: IconType;
  isLoading?: boolean;
}
const FeatureCard = ({ children, title, isLoading, actions, icon }: IProps) => {
  return (
    <Card w="full" h="full" backgroundColor="white">
      <CardHeader borderBottomWidth="1px" borderBottomColor="gray.200">
        <HStack justifyContent="space-between" spacing="4">
          <HStack align="center">
            <Icon as={icon} boxSize={8} color="teal.500" />

            <Heading size="lg" color="purple.700" fontWeight="regular">
              {title}
            </Heading>
          </HStack>
          <HStack>
            {isLoading && <Spinner color="teal.500" />}
            {actions?.map(({ icon: Icon, onClick }) => (
              <IconButton
                key={Icon.name}
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<Icon size="24" color="gray" />}
                onClick={onClick}
              />
            ))}
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default FeatureCard;
