import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack
} from "@chakra-ui/react";
import { NextPage } from "next";
import {
  MdHistory,
  MdMailOutline,
  MdMoreVert,
  MdOutlineChat,
  MdOutlineFastForward,
  MdOutlineSend,
  MdOutlineSignalCellularAlt,
  MdOutlineThumbUp,
  MdPieChartOutlined,
  MdZoomOutMap,
} from "react-icons/md";
import CloseRatiosChart from "../components/close-ratios-chart";
import FeatureCard from "../components/feature-card";
import FormCreateQuote from "../components/form-create-quote";
import HomeHero from "../components/home-hero";
import NewLeadsList from "../components/new-leads-list";
import PendingQuotesList from "../components/pending-quotes-list";
import RevenueChart from "../components/revenue-lines-chart";
import RevenuePotentialChart from "../components/revenue-potential-chart";
import TeamChatList from "../components/team-chat-list";
import { IDeparture } from "../domain/entities/departure.entity";
import { ITransportation } from "../domain/entities/transportation.entity";

interface Props {
  darpartures: IDeparture[];
  transports: ITransportation[];
}

const Home: NextPage<Props> = () => {
  return (
    <VStack alignItems="start" spacing={8}>
      <HomeHero />

      <Grid
        w="full"
        h="full"
        gap={4}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdOutlineFastForward}
            title="Quick Quote"
            actions={[
              {
                icon: MdZoomOutMap,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <FormCreateQuote />
          </FeatureCard>
        </GridItem>
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdHistory}
            title="Pending Quotes"
            actions={[
              {
                icon: MdZoomOutMap,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <PendingQuotesList />
          </FeatureCard>
        </GridItem>
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdMailOutline}
            title="New Leads"
            actions={[
              {
                icon: MdZoomOutMap,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <NewLeadsList />
          </FeatureCard>
        </GridItem>
      </Grid>

      <Grid
        w="full"
        h="full"
        gap={4}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <GridItem
          colSpan={{
            base: 1,
            md: 2,
          }}
        >
          <FeatureCard
            icon={MdOutlineSend}
            title="Popular Destinations & Packages"
            actions={[
              {
                icon: MdMoreVert,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <h1>Feature 1</h1>
          </FeatureCard>
        </GridItem>
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdOutlineChat}
            title="Team Chat"
            actions={[
              {
                icon: MdMoreVert,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <TeamChatList />
          </FeatureCard>
        </GridItem>
      </Grid>

      <Grid
        w="full"
        h="full"
        gap={4}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdOutlineSignalCellularAlt}
            title="Revenue"
            actions={[
              {
                icon: MdMoreVert,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <Box h="256" w="full">
              <RevenueChart />
            </Box>
          </FeatureCard>
        </GridItem>
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdPieChartOutlined}
            title="Potential Revenue"
            actions={[
              {
                icon: MdMoreVert,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <HStack
              w={"full"}
              h="full"
              justifyContent="space-between"
              spacing={4}
              my="auto"
            >
              <Box h={128}>
                <RevenuePotentialChart />
              </Box>
              <Box h={128}>
                <RevenuePotentialChart />
              </Box>
              <Box h={128}>
                <RevenuePotentialChart />
              </Box>
            </HStack>
          </FeatureCard>
        </GridItem>
        <GridItem colSpan={1}>
          <FeatureCard
            icon={MdOutlineThumbUp}
            title="Close Ratios"
            actions={[
              {
                icon: MdMoreVert,
                onClick: () => console.log("clicked"),
              },
            ]}
          >
            <HStack w={"full"} h="full" justifyContent="center" spacing={4}>
              <Box maxH={144} pos="relative">
                <Heading
                  pos="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="purple.700"
                >
                  70%
                </Heading>
                <CloseRatiosChart />
              </Box>
            </HStack>
          </FeatureCard>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Home;
