import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import {
  MdAttachMoney,
  MdDescription,
  MdGroup,
  MdHome,
  MdInsights,
  MdListAlt,
  MdSend,
  MdSettings,
  MdSupport,
} from "react-icons/md";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: MdHome },
  { name: "Quotes", icon: MdAttachMoney },
  { name: "Leads", icon: MdListAlt },
  { name: "Tours", icon: MdSend },
];

const LinkItems2: Array<LinkItemProps> = [
  { name: "Invoices", icon: MdDescription },
  { name: "Analytics", icon: MdInsights },
  { name: "Team", icon: MdGroup },
  { name: "Admin", icon: MdSettings },
  { name: "Suport", icon: MdSupport },
];

export default function SideBar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      paddingTop={16}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 48 }} p="4" h="full">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.200")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.200")}
      w={{ base: "full", md: 48 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Divider
        orientation="horizontal"
        w='99%'
        borderWidth={1}
        borderColor="gray.400"
      />
      {LinkItems2.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="6"
        role="group"
        cursor="pointer"
        color={useColorModeValue("purple.700", "purple.700")}
        fontWeight="semibold"
        _hover={{
          bg: "gray.400",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" _groupHover={{}} as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
