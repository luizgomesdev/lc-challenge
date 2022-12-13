import {
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import FeatureCard from "./components/feature-card";
import HomeHero from "./components/home-hero";
import {
  MdOutlineFastForward,
  MdHistory,
  MdMailOutline,
  MdSignalCellular3Bar,
  MdSignalCellularAlt,
  MdPieChart,
  MdThumbsUpDown,
  MdThumbUp,
  MdOutlineSignalCellularAlt,
  MdPieChartOutlined,
  MdOutlineThumbUp,
  MdOutlineChat,
  MdOutlineSend,
  MdZoomOutMap,
  MdMoreVert,
} from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import FormCreateQuote from "./components/form-create-quote";
const Home: NextPage = () => {
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
            <h1>Feature 1</h1>
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
            <h1>Feature 1</h1>
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
            <h1>Feature 1</h1>
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
            <h1>Feature 1</h1>
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
            <h1>Feature 1</h1>
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
            <h1>Feature 1</h1>
          </FeatureCard>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Home;
