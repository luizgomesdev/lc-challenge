import { Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <Stack
      align="center"
      justifyContent="space-between"
      spacing="8"
      p={8}
      rounded={"xl"}
      bgGradient="linear(to-r, teal.300, teal.800)"
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <VStack w="full" alignItems="start" spacing={8}>
        <Heading color="white">
          Welcome to <br /> your dashboard
        </Heading>
        <Text color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          orci nec mauris sollicitudin consequat eu vitae massa. Fusce efficitur
          mi eu magna vehicula, sed aliquet ex volutpat. Nunc rutrum, enim a
          pharetra scelerisque, nibh ex consequat massa, ac interdum nulla massa
          ut massa. Suspendisse potenti. Proin luctus tempor neque, id faucibus
          purus commodo vel.
        </Text>
        <Text color="white">
          Integer volutpat mi id nisl pharetra placerat. Aenean vulputate dui
          risus, id convallis metus auctor in.
        </Text>
      </VStack>
      <VStack w="full" spacing={8}>
        <Image
          w="full"
          maxW="lg"
          maxH="lg"
          src="/assets/dashboard.svg"
          rounded="xl"
          alt="Dashboard"
        />
        <Stack
          w="full"
          justifyContent={{
            base: "center",
            md: "space-between",
          }}
          textShadow="3px 3px 6px gray"
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <HStack
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Text color="orange.300" fontWeight="bold" fontSize={"5xl"}>
              101
            </Text>
            <Text color="white" textTransform="uppercase">
              New <br /> leads
            </Text>
          </HStack>
          <HStack
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Text color="orange.300" fontWeight="bold" fontSize="5xl">
              101
            </Text>
            <Text color="white" textTransform="uppercase">
              Quotes <br /> created
            </Text>
          </HStack>
          <HStack
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Text color="orange.300" fontWeight="bold" fontSize="5xl">
              101
            </Text>
            <Text color="white" textTransform="uppercase">
              Pending <br /> orders
            </Text>
          </HStack>
        </Stack>
      </VStack>
    </Stack>
  );
}
