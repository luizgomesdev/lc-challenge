import {
  MoonIcon,
  PhoneIcon,
  SearchIcon,
  BellIcon,
  ChatIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  Text,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Input } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      px={8}
      h={16}
      w="full"
      pos="fixed"
      zIndex="sticky"
      bg={useColorModeValue("purple.700", "purple.700")}
      //   position="fixed"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <HStack color="white" spacing={4}>
        <Icon as={MdDashboard} boxSize='12' color="white" />
        <VStack spacing={0} alignItems="start">
          <Heading size="md">Wet Bat</Heading>
          <Text>TRAVEL</Text>
        </VStack>
      </HStack>

      <HStack alignItems={"center"} h="12" spacing={4}>
        <InputGroup size="sm">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="search"
            w="96"
            rounded="md"
            bg="gray.200"
            _focus={{
              borderColor: "none",
            }}
          />
        </InputGroup>

        <IconButton
          variant="link"
          aria-label="Call Segun"
          icon={<BellIcon color="gray.200" />}
        />
        <IconButton
          variant="link"
          aria-label="Call Segun"
          icon={<ChatIcon color="gray.200" />}
        />
        <IconButton
          variant="link"
          aria-label="Call Segun"
          icon={<SettingsIcon color="gray.200" />}
        />

        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <br />
            <Center>
              <Avatar
                size={"2xl"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </Center>
            <br />
            <Center>
              <p>Username</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Your Servers</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Navbar;
